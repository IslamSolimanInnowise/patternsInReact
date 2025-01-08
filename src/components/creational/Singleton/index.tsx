import AppConfig from "./appConfig";

const Singleton: React.FC = () => {
  const config = AppConfig.getInstance();
  const config2 = AppConfig.getInstance();

  console.log(config === config2);

  return (
    <div>
      <h2>Singleton Design Pattern Example</h2>
      <p>App Name: {config.appName}</p>
      <p>Version: {config.version}</p>
    </div>
  );
};

export default Singleton;
