import { useEffect, useState } from "react";
import { AllData, ApiFacade } from "./apiFacade";

const Facade: React.FC = () => {
  const [data, setData] = useState<AllData>({
    user: null,
    posts: null,
    comments: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await ApiFacade.getUserData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Facade Design Pattern Example</h2>
      {data.user && <p>User: {data.user.name}</p>}
      <h3>Posts:</h3>
      <ul>
        {data.posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h3>Comments:</h3>
      <ul>
        {data.comments?.map((comment, index) => (
          <li key={index}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Facade;
