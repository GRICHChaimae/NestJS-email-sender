import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Set up the ConfigModule to load environment variables
    MailerModule.forRootAsync({
      imports: [ConfigModule], // Import the ConfigModule into the MailerModule configuration
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('SMTP_HOST'), // Get the SMTP host from environment variables
          port: configService.get('SMTP_PORT'), // Get the SMTP port from environment variables
          auth: {
            user: configService.get('SMTP_USER'), // Get the SMTP username from environment variables
            pass: configService.get('SMTP_PASSWORD'), // Get the SMTP password from environment variables
          },
        },
        defaults: {
          from: configService.get('SMTP_FROM'), // Get the SMTP from address from environment variables
        },
      }),
      inject: [ConfigService], // Inject the ConfigService to get access to the environment variables
    }),
  ],
  providers: [MailsService],
  controllers: [MailsController],
})
export class MailsModule {}
