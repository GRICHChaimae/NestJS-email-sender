import { Controller, Get } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
  constructor(private mailsService: MailsService) {} // Inject the MailsService into the constructor

  @Get() // Decorate the sendEmail method with the Get decorator
  sendEmail(): Promise<string> {
    return this.mailsService.sendEmail(); // Call the sendEmail method of the MailsService and return its result
  }
}
