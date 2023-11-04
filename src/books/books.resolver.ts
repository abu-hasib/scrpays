import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './models/book.model';
import { BooksService } from './books.service';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book])
  async books() {
    console.log({ booksService: this.booksService });
    return this.booksService.findAll();
  }
}
