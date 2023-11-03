import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async makeBook(): Promise<Book> {
    return await this.appService.makeBook({
      name: 'One',
      description: 'Describe',
    });
  }
}
