import gql from "graphql-tag";

export const GETALLPOSTS = gql`
  query getAuthor($id: Int!) {
    author(id: $id) {
      lastName
      firstName
      email
      id
      posts {
        id
        title
        votes
        __typename
      }
    }
  }
`;

export const UPVOTE = gql`
  mutation castVote($id: Int!) {
    upvotePost(postId: $id) {
      id
      title
      votes
      authorId
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: Int!) {
    deletePost(postId: $id) {
      id
      title
      votes
      authorId
    }
  }
`;

export const POST_DELETED_SUBSCRIPTION = gql`
  subscription postDeleted($id: Int!) {
    postDeleted(id: $id) {
      id
      title
      votes
      authorId
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($title: String!, $authorId: Int!) {
    createPost(title: $title, authorId: $authorId) {
      title
      id
    }
  }
`;
