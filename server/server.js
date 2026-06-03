import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
    const { fullName, email, country, about } = req.body;

    // Validation
    if (!fullName || !email || !country || !about) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Insert into database
    const query = 'INSERT INTO insurance_forms (fullName, email, country, about) VALUES (?, ?, ?, ?)';
    const connection = await pool.getConnection();
    const [result] = await connection.execute(query, [fullName, email, country, about]);
    connection.release();

    res.status(201).json({ 
      message: 'Form submitted successfully',
      id: result.insertId 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

// Get all submissions endpoint
app.get('/api/submissions', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM insurance_forms ORDER BY created_at DESC');
    connection.release();
    
    res.json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching submissions', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
