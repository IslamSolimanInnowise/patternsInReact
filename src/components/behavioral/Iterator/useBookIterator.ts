import { useState } from "react";

export const useBookIterator = (books: string[]) => {
  const [index, SetIndex] = useState(0);

  const reset = () => {
    SetIndex((i) => {
      i = 0;
      return i;
    });
  };

  const next = () => {
    if (index < books.length - 1) {
      SetIndex((i) => i + 1);
    } else {
      reset();
    }
  };

  return { index, next, reset };
};
