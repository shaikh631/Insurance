import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || 'as9251145@gmail.com';
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Insurance Website <onboarding@resend.dev>';
const RESEND_API_URL = 'https://api.resend.com/emails';

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const sendSubmissionEmail = async ({ fullName, email, phone, country, about }) => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Resend API key is missing');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  const payload = {
    from: RESEND_FROM_EMAIL,
    to: [CONTACT_EMAIL_TO],
    reply_to: email,
    subject: `New insurance form submission from ${fullName}`,
    text: [
      'New insurance form submission',
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Insurance Type: ${country}`,
      '',
      'Message:',
      about
    ].join('\n'),
    html: `
      <h2>New insurance form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Insurance Type:</strong> ${escapeHtml(country)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(about).replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    const responseText = await response.text();
    let result = {};

    if (responseText) {
      try {
        result = JSON.parse(responseText);
      } catch {
        result = { message: responseText };
      }
    }

    if (!response.ok) {
      throw new Error(result?.message || 'Failed to send email with Resend');
    }

    console.log('Email sent:', result?.id);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Email service timed out. Please try again.');
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Submit form endpoint
app.post('/api/submit-form', async (req, res) => {
  try {
    const { fullName, email, phone, country, about } = req.body;

    // Validation
    if (!fullName || !email || !country || !about) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    await sendSubmissionEmail({ fullName, email, phone, country, about });

    res.status(201).json({ 
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Email provider: Resend HTTP API');
});
