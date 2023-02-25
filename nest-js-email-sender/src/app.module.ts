// import { Module } from '@nestjs/common';
// import { MailsModule } from './mails/mails.module';
import { Module } from '@nestjs/common';
import { MailsModule } from './mails/mails.module';

@Module({
  imports: [MailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
