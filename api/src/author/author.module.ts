import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PostModule } from 'src/post/post.module';

@Module({
  controllers: [],
  providers: [AuthorService, AuthorResolver],
  imports:[PostModule]
})
export class AuthorModule {}
