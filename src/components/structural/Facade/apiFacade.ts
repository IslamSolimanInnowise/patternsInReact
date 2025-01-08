import { fetchUser, fetchPosts, fetchComments } from "./api";

interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
}

interface Comment {
  postId: number;
  comment: string;
}

export interface AllData {
  user: User | null;
  posts: Post[] | null;
  comments: Comment[] | null;
}

export const ApiFacade = {
  getUserData: async (): Promise<AllData> => {
    const user = await fetchUser();
    const posts = await fetchPosts();
    const comments = await fetchComments();

    return {
      user,
      posts,
      comments,
    };
  },
};
