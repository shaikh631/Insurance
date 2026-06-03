# Insurance Form Backend API

This backend handles insurance form submissions and stores them in MySQL database.

## Setup Instructions

### 1. Database Setup

First, create the database and table by running the SQL file:

```bash
mysql -u root -p < setup.sql
```

When prompted, enter your MySQL password.

### 2. Configure Environment

Copy `.env.example` to `.env` and update with your MySQL credentials:

```bash
cp .env.example .env
```

Edit `.env` with your actual database credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=insurance_db
DB_PORT=3306
PORT=5000
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Server

For development (with auto-reload):
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health`
  - Response: `{ "status": "Server is running" }`

### Submit Form
- **POST** `/api/submit-form`
  - Body: 
    ```json
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "country": "United States",
      "about": "Message content..."
    }
    ```
  - Response: `{ "message": "Form submitted successfully", "id": 1 }`

### Get All Submissions
- **GET** `/api/submissions`
  - Response: Array of form submissions

## Frontend Integration

The frontend React app at `/Users/ayanshaikh/Desktop/React/Insurance` is already configured to send form data to this backend.

Make sure to start both:
1. **Backend**: `npm run dev` (from `/server` folder)
2. **Frontend**: `npm run dev` (from root project folder)

## Testing the Setup

1. Start the backend server
2. Start the frontend React app
3. Fill out the form in the "Contact" section
4. Submit the form
5. Check your MySQL database to verify the data was stored

```bash
mysql -u root -p insurance_db
SELECT * FROM insurance_forms;
```

## Troubleshooting

- **Connection refused**: Make sure MySQL is running
- **CORS errors**: Ensure the backend is running on port 5000
- **Database errors**: Verify credentials in `.env` file
