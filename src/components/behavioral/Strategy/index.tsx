import { useState } from "react";
import { ascendingSort, descendingSort, lengthSort } from "./sortingStrategies";

const Strategy: React.FC = () => {
  const [items, setItems] = useState([
    "Banana",
    "Apple",
    "Grapes",
    "Mango",
    "Pineapple",
  ]);

  return (
    <div>
      <h2>Strategy Pattern Example</h2>

      <div>
        <button onClick={() => setItems(ascendingSort(items))}>
          Sort Ascending
        </button>
        <button onClick={() => setItems(descendingSort(items))}>
          Sort Descending
        </button>
        <button onClick={() => setItems(lengthSort(items))}>
          Sort by Length
        </button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Strategy;
