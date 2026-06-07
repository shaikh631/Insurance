# Insurance Form Email API

This backend receives insurance form submissions and sends the details with the Resend HTTP API.

## Setup

Create a `.env` file:

```bash
cp .env.example .env
```

Update `.env`:

```env
PORT=5000
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=Insurance Website <onboarding@resend.dev>
CONTACT_EMAIL_TO=your_email@example.com
```

Use a verified Resend sender in `RESEND_FROM_EMAIL` when sending to real recipients.

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
