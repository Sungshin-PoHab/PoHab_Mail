import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(config) {
    console.log(config);
    await this.mailerService.sendMail(config);
    return true;
  }
}
