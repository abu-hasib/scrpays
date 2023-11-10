import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { Book } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
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
