type SortStrategy = (items: string[]) => string[];

export const ascendingSort: SortStrategy = (items) => [...items].sort();
export const descendingSort: SortStrategy = (items) =>
  [...items].sort().reverse();
export const lengthSort: SortStrategy = (items) =>
  [...items].sort((a, b) => a.length - b.length);
