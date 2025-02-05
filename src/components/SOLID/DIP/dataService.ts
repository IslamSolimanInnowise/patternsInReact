export interface DIPUser {
  id: number;
  name: string;
  email: string;
}

export type DataServiceDIP = typeof dataService;

export const dataService = {
  fetchData: async (): Promise<DIPUser[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: DIPUser[] = await response.json();

    if (data.length > 5) {
      data.length = 5;
    }

    return data;
  },
};
