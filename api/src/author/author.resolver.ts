
import { Args, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { PostService } from 'src/post/post.service';
import { AuthorService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
  private pubSub = new PubSub();
  constructor(private authService: AuthorService, private postsService: PostService) {

  }

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    console.log(`received request for ${JSON.stringify(id)}`);
    
    return this.authService.findById(id);
  }

  @ResolveField('posts')
  async getPosts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id })
  }

  

  // @Subscription('commentAdded', {
  //   filter(this: AuthorResolver, payload, variables) {
  //     return payload.commentAdded.title === variables.title
  //   }
  // })
  // commentAdded() {
  //   return this.pubSub.asyncIterator('commentAdded');
  // }

}
