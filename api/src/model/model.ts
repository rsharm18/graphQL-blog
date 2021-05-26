
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Author {
    __typename?: 'Author';
    id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    posts?: Post[];
}

export class Post {
    __typename?: 'Post';
    id: number;
    title: string;
    votes?: number;
    authorId: number;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract author(id: number): Author | Promise<Author>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract upvotePost(postId: number): Post | Promise<Post>;

    abstract deletePost(postId: number): Post | Promise<Post>;
}

export abstract class ISubscription {
    __typename?: 'ISubscription';

    abstract postDeleted(): Post | Promise<Post>;
}
