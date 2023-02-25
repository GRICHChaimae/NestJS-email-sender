# Sending Emails with Nodemailer in NestJS

This repository contains the code to send emails using Nodemailer in a NestJS application. Follow the steps below to set up the project on your local machine.

## Prerequisites

•	Node.js and npm installed on your machine

•	An email account (e.g. Gmail, Outlook) to send emails from

## Installation

1.	Clone the repository to your local machine.
2.	Navigate to the root directory of the project in your terminal.
3.	Run the following command to install the required Node packages:

```bash
• npm install 

• npm install nodemailer @nestjs-modules/mailer

• npm install --save @nestjs/config
```

## Configuration

```python
1.	Create a .env file in the root directory of the project.
2.	Add the following variables to the .env file, replacing the values with your own email account details:
  .	SMTP_HOST=your-smtp-host
  .	SMTP_PORT=your-smtp-port
  .	SMTP_USER=your-email-address
  .	SMTP_PASSWORD=your-email-password
  .	SMTP_FROM=your-email-address
```