import { fetchUser, fetchPosts, fetchComments } from "./api";

export const ApiFacade = {
  getUserData: async () => {
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
