import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import prisma from 'lib/prisma';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async makeBook({ name, description }): Promise<Book> {
    try {
      const book = await prisma.book.create({ data: { name, description } });
      return book;
    } catch (error) {}
  }
}
