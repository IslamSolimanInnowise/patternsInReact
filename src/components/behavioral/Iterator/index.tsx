import { useBookIterator } from "./useBookIterator";

const Iterator: React.FC = () => {
  const books = [
    "The Great Gatsby",
    "Moby Dick",
    "Pride and Prejudice",
    "1984",
    "War and Peace",
  ];

  const { next, reset, index } = useBookIterator(books);
  const book = books[index];

  return (
    <div>
      <h2>Iterator Pattern Example</h2>
      <p>Current Book: {book}</p>
      <button onClick={next}>Next Book</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Iterator;
