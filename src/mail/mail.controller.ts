import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/sendMail')
  async sendMail(@Body() body) {
    try {
      return this.mailService.sendMail({
        to: `${body.email}`,
        from: process.env.EMAIL_AUTH_EMAIL,
        subject: `${body.title}`,
        text: `${body.text}`,
      });
    } catch (e) {
      console.log(e);
      return;
    }
  }
}
