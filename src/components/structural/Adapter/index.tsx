import { fetchUserFromApi } from "./mockAPI";
import { adaptUser } from "./userAdapter";
import { User } from "./user";
import { useEffect, useState } from "react";

const Adapter: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUser = await fetchUserFromApi();
      const adaptedUser = adaptUser(apiUser); // Using the Adapter
      setUser(adaptedUser);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Adapter Design Pattern Example</h2>
      {user ? (
        <p>
          Name: {user.fullName} <br />
          Age: {user.age}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Adapter;
