export type ApiUser = {
  first_name: string;
  last_name: string;
  user_age: number;
};

export const fetchUserFromApi = async (): Promise<ApiUser> => {
  return {
    first_name: "John",
    last_name: "Doe",
    user_age: 30,
  };
};
