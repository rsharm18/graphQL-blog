import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { DELETE_POST, GETALLPOSTS, POST_DELETED_SUBSCRIPTION, UPVOTE } from './query';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: any[] = [];
  private data;
  private author;

  private query: QueryRef<any>;

  private queryObservable$: Observable<ApolloQueryResult<any>>;

  private authorSub = new BehaviorSubject(null);
  author$: Observable<any> = this.authorSub.asObservable();

  private postSub = new BehaviorSubject(null);
  posts$: Observable<any> = this.postSub.asObservable();

  constructor(private apollo: Apollo) {
    this.query = this.apollo.watchQuery({
      query: GETALLPOSTS,
      variables: { id: 1 }
    });

    this.subscribeToDeletedPost();
   }

  upvote(post: any) {
    let existingPosts: any[] = JSON.parse(JSON.stringify(this.posts));
    this.apollo.mutate({
      mutation: UPVOTE,
      variables: {
        id: post.id
      }
    }).subscribe(async result => {

      const updatedPost = result?.data['upvotePost'];
      existingPosts = existingPosts.filter(post =>  post.id !== updatedPost.id );
      const newData = JSON.parse(JSON.stringify({ ...post, ...updatedPost }));
      existingPosts.push({ ...newData });
      this.setPosts(JSON.parse(JSON.stringify(existingPosts)));

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  getAllPosts(userId: number) {
    this.query = this.apollo.watchQuery({
      query: GETALLPOSTS,
      variables: { id: 1 }
    });
    this.query.valueChanges.subscribe(result => {
      this.data = result?.data?.author;
      this.setUser();
      this.setPosts(this.data.posts);
    });
  }


  deletePost(post): void{

    let existingPosts: any[] = JSON.parse(JSON.stringify(this.posts));
    this.apollo.mutate({
      mutation: DELETE_POST,
      variables: {
        id: post.id
      }
    }).subscribe(async result => {

      const deletePost = result?.data['deletePost'];
      existingPosts = existingPosts.filter(post =>  {
        return post.id !== deletePost.id;
      } );
      const newData = JSON.parse(JSON.stringify({ ...post, ...deletePost }));

      this.setPosts(JSON.parse(JSON.stringify(existingPosts)));

    }, (error) => {
      console.log('there was an error sending the query', error);
    });


  }

  subscribeToDeletedPost() {
    this.query.subscribeToMore({
      document: POST_DELETED_SUBSCRIPTION,
      variables: { id: 1 }
      ,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        console.log(`prev ${JSON.stringify(prev)}`);
        console.log((`subscriptionData ${JSON.stringify(subscriptionData)}`));

        let existingPosts: any[] = JSON.parse(JSON.stringify(this.posts));
        const deletePost = subscriptionData.data.postDeleted;

        // const deletePost = result?.data['deletePost'];
        existingPosts = existingPosts.filter(post =>  {
        return post.id !== deletePost.id;
      } );

        this.setPosts(JSON.parse(JSON.stringify(existingPosts)));

        // return {
        //   ...prev,
        //   entry: {
        //     posts: [newFeedItem, ...prev?.entry?.posts]
        //   }
        // };
      }
    });
  }
  private setPosts(posts): void {
    this.posts = posts;
    this.postSub.next(this.posts);
  }

  private setUser(): void {
    let keys = Object.keys(this.data);
    keys = keys.filter(value => value !== 'posts');
    const user: any = {};
    keys.forEach(val => {
      user[val] = this.data[val];
    });

    user.Name = user.firstName + ' ' + user.lastName;
    delete user.firstName;
    delete user.lastName;

    this.author = [{ ...user }];
    this.authorSub.next(this.author);
  }


}
