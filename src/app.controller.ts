import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from '@prisma/client';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async makeBook(@Req() req: Request<object, object, Book>): Promise<Book> {
    console.log({ request: req.body });
    const { name, description } = req.body;
    return await this.appService.makeBook({ name, description });
  }
}
