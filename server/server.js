import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || 'as9251145@gmail.com';

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

// const mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD
//   }
// });
const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

if (process.env.NODE_ENV !== "production") {
  mailTransporter.verify((error) => {
    if (error) console.log("SMTP Error:", error);
    else console.log("SMTP Ready");
  });
}

const sendSubmissionEmail = async ({ fullName, email, phone, country, about }) => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail email settings are missing');
  }

  console.log("Sending email...");
  console.log("User:", process.env.GMAIL_USER);
  console.log("Password exists:", !!process.env.GMAIL_APP_PASSWORD);


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
});
