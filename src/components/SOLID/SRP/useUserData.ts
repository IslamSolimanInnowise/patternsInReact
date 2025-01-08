import { useState, useEffect } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserData = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data as User[]));
  }, []);

  return { users };
};
