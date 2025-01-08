type SortStrategy = (items: string[]) => string[];

const ascendingSort: SortStrategy = (items) => [...items].sort();
const descendingSort: SortStrategy = (items) => [...items].sort().reverse();
const lengthSort: SortStrategy = (items) =>
  [...items].sort((a, b) => a.length - b.length);

export { ascendingSort, descendingSort, lengthSort };
