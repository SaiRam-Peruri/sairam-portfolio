# EmailJS Setup Guide for Contact Form

The contact form uses EmailJS to send emails directly from the frontend. Here's how to set it up:

## Quick Setup (5 minutes):

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (allows 200 emails/month)

### 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- Note down your **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Message from {{user_name}}

Hello Sai Ram,

You have received a new message from your portfolio contact form:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

- Save and note down your **Template ID**

### 4. Get Public Key
- Go to "API Keys" section
- Find your **Public Key**

### 5. Update Environment Variables
Edit your `.env` file with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Restart Development Server
```bash
npm run dev
```

## Alternative: Direct Email Links

If you prefer not to set up EmailJS, the contact cards already include direct email and phone links that work immediately:

- **Email**: [sairam.peruri.work@gmail.com](mailto:sairam.peruri.work@gmail.com)
- **Phone**: [+1 (978) 726-6536](tel:+19787266536)

## For Production Deployment

Make sure to add the environment variables to your deployment platform (Vercel, Netlify, etc.):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The contact form will gracefully fallback to showing direct contact information if EmailJS is not configured.
