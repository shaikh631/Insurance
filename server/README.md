# Insurance Form Email API

This backend receives insurance form submissions and sends the details to `ayan.codes9819@gmail.com`.

## Setup

Create a `.env` file:

```bash
cp .env.example .env
```

Update `.env`:

```env
PORT=5000
GMAIL_USER=your_gmail_account
GMAIL_APP_PASSWORD=your_gmail_app_password
```

Use a Gmail App Password for `GMAIL_APP_PASSWORD`. Do not use your normal Gmail password.

## Install

```bash
npm install
```

## Run

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## Endpoints

### Health Check

```http
GET /api/health
```

### Submit Form

```http
POST /api/submit-form
```

Body:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "country": "Health Insurance",
  "about": "Message content..."
}
```

Response:

```json
{
  "message": "Form submitted successfully"
}
```
