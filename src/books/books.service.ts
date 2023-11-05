import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import prisma from 'src/lib/prisma';
import { UpdateBookInput } from './update-book.input';
import { CreateBookInput } from './create-book.input';

@Injectable()
export class BooksService {
  async create(params: CreateBookInput): Promise<Book> {
    const book = await prisma.book.create({
      data: { ...params },
    });
    return book;
  }

  async findAll(): Promise<Book[]> {
    try {
      const books = await prisma.book.findMany();
      return books;
    } catch (error) {}
  }

  async findOne(id: string): Promise<Book | null> {
    try {
      const book = await prisma.book.findUniqueOrThrow({
        where: {
          id: parseInt(id),
        },
      });
      return book;
    } catch (error) {
      console.log({ error });
    }
  }

  async update(params: UpdateBookInput): Promise<Book | null> {
    const { id, ...others } = params;
    return await prisma.book.update({
      where: { id: parseInt(id) },
      data: {
        ...others,
      },
    });
  }

  async delete(id: string): Promise<Book | null> {
    return await prisma.book.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
