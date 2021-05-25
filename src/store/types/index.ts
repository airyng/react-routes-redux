export enum MainStateActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  FETCH_COMMENTS = "FETCH_COMMENTS",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR"
}

export interface MainState {
  posts: Array<Post>;
  comments: Array<Comment>;
  loading: boolean;
  error: null | string;
}

export interface MainStateAction {
  type: null | string;
  payload?: any;
}

export interface Comment {
  id: number;
  body: string;
  email: string;
  postId: string;
}

export interface Post {
  id: number;
  title: string;
}