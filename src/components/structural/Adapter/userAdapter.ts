import type { ApiUser } from "./mockAPI";
import type { User } from "./user";

export const adaptUser = (apiUser: ApiUser): User => {
  return {
    fullName: `${apiUser.first_name} ${apiUser.last_name}`,
    age: apiUser.user_age,
  };
};
