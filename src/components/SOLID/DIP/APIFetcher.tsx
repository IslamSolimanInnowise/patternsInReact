import { useEffect, useState } from "react";
import { DataServiceDIP, DIPUser } from "./dataService";

interface APIFetcherProps {
  dataService: DataServiceDIP;
}

const APIFetcher: React.FC<APIFetcherProps> = ({ dataService }) => {
  const [users, setUsers] = useState<DIPUser[]>([]);

  useEffect(() => {
    dataService.fetchData().then((fetchedUsers) => {
      setUsers(fetchedUsers);
    });
  }, [dataService]);

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APIFetcher;
