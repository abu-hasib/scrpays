import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'book ' })
export class Book {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
