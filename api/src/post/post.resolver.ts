import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { PostService } from "./post.service";
import { Post } from "../model/model";

@Resolver("Post")
export class PostResolver {
  POST_DELETED_EVENT = "postDeleted";
  private pubSub = new PubSub();
  constructor(private postsService: PostService) {}

  @Mutation()
  async upvotePost(@Args("postId") postId: number) {
    console.log(`received the update request`);

    return this.postsService.upvoteById({ id: postId });
  }

  @Mutation()
  async deletePost(@Args("postId") postId: number) {
    const post = this.postsService.delete({ id: postId });
    this.pubSub.publish(this.POST_DELETED_EVENT, { postDeleted: post });
    return post;
  }

  @Mutation()
  async createPost(
    @Args("title") title: string,
    @Args("authorId") authorId: number
  ) {
    return this.postsService.create(title, authorId);
  }

  @Subscription("postDeleted")
  postDeleted() {
    console.log(`pubSub called--`);

    return this.pubSub.asyncIterator("postDeleted");
  }
  // constructor(private authService: AuthorService, private postsService: PostService) {

  // }

  // @Query('posts')
  // async getAllPosts(@Args('id') authorId: number) {
  //   return this.postsService.findAll({authorId});
  // }
}
