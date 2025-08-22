# EmailJS Setup Instructions

To receive emails when someone submits your contact form, follow these steps:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account
- Verify your email address

## 2. Add Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" and connect your Gmail account (nordiblesolutions@gmail.com)
- Note down the Service ID service_esxb8og

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

- Save the template and note down the Template ID template_464d5vb

## 4. Get Public Key
- Go to "Account" > "General"
- Copy your Public Key W5buWLUDBdochr6eS

## 5. Update Configuration
Replace the placeholders in `src/services/emailService.ts`:
- `YOUR_SERVICE_ID` with your Gmail service ID
- `YOUR_TEMPLATE_ID` with your template ID  
- `YOUR_PUBLIC_KEY` with your public key

## 6. Test
- Run your portfolio locally
- Fill out and submit the contact form
- Check your Gmail inbox for the notification

The free EmailJS plan allows 200 emails per month, which should be sufficient for a portfolio contact form.