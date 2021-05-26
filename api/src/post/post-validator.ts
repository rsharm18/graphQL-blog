
import { MinLength, MaxLength } from 'class-validator';
import { Post } from 'src/model/model';

export class CreatePostInput extends Post {
  @MinLength(3)
  @MaxLength(50)
  title: string;
}