import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './models/book.model';
import { BooksService } from './books.service';
import { NotFoundException } from '@nestjs/common';
import { UpdateBookInput } from './update-book.input';
import { CreateBookInput } from './create-book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly bookService: BooksService) {}

  @Query(() => [Book])
  async books() {
    console.log({ booksService: this.bookService });
    return this.bookService.findAll();
  }

  @Query(() => Book)
  async book(@Args('id') id: string): Promise<Book> {
    const book = await this.bookService.findOne(id);
    console.log({ book });
    if (!book) {
      throw new NotFoundException(book);
    }
    return book;
  }

  @Mutation(() => Book, { nullable: true })
  async updateBook(@Args('input') args: UpdateBookInput): Promise<Book> {
    const createdBook = await this.bookService.update(args);
    console.log({ book: createdBook });
    return createdBook;
  }

  @Mutation(() => Book, { nullable: true })
  async createBook(@Args('input') args: CreateBookInput): Promise<Book> {
    const createdBook = await this.bookService.create(args);
    console.log({ book: createdBook });
    return createdBook;
  }

  @Mutation(() => Book, { nullable: true })
  async removeBook(@Args('id') id: string): Promise<Book> {
    const createdBook = await this.bookService.delete(id);
    console.log({ book: createdBook });
    return createdBook;
  }
}
