import { useUserData } from "./useUserData";

const SRP: React.FC = () => {
  const { users } = useUserData();

  return (
    <div>
      <h2>Single Responsibility Principle Example</h2>
      {users ? (
        <>
          {users.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default SRP;
