import { dataService } from "./dataService";
import APIFetcher from "./APIFetcher";

const DIP: React.FC = () => {
  return (
    <div>
      <h2>Dependency Inversion Principle Example</h2>
      <APIFetcher dataService={dataService} />
    </div>
  );
};

export default DIP;
