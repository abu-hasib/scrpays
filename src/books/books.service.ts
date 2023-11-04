import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import prisma from 'src/lib/prisma';

@Injectable()
export class BooksService {
  async makeBook({ name, description }): Promise<Book> {
    try {
      const book = await prisma.book.create({ data: { name, description } });
      return book;
    } catch (error) {}
  }
  async findAll(): Promise<Book[]> {
    try {
      const books = await prisma.book.findMany();
      return books;
    } catch (error) {}
  }
}
