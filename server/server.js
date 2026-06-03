import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL_TO = 'ayan.codes9819@gmail.com';

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

const sendSubmissionEmail = async ({ fullName, email, phone, country, about }) => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail email settings are missing');
  }

  await mailTransporter.sendMail({
    from: `"Insurance Website" <${process.env.GMAIL_USER}>`,
    to: CONTACT_EMAIL_TO,
    replyTo: email,
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
  });
};

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    console.error('Error:', error);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
