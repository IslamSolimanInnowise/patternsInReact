export interface DIPUser {
  id: number;
  name: string;
  email: string;
}

export const dataService = {
  fetchData: async (): Promise<DIPUser[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: DIPUser[] = await response.json();

    if (data.length > 5) {
      data.length = 5;
    }

    return data;
  },
};

export type DataServiceDIP = typeof dataService;
