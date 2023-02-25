import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailsService {
  constructor(private readonly mailerService: MailerService) {}

  // Define an async function to send an email
  async sendEmail() {
    // Use the sendMail() method of the mailerService to send an email
    try {
      await this.mailerService.sendMail({
        to: 'example@mail.com', // Specify the email address to send the email to
        subject: 'Test Successful', // Specify the subject of the email
        html: ` 
          <h1>Hello world from NestJS</h1>
          <p>text description</p>
        `, // Specify the HTML of the email body
      });
      return 'Email sent successfully';
    } catch (error) {
      return `Error sending email: ${error.message}`;
    }
  }
}
