export const fetchUser = async () => {
  return { id: 1, name: "John Doe" };
};

export const fetchPosts = async () => {
  return [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
  ];
};

export const fetchComments = async () => {
  return [
    { postId: 1, comment: "Great post!" },
    { postId: 2, comment: "Nice article." },
  ];
};
