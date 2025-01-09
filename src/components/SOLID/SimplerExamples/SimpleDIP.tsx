interface Logger {
  log: (message: string) => void;
}

const ConsoleLogger: Logger = { log: (message) => console.log(message) };
const AlertLogger: Logger = { log: (message) => alert(message) };

const LoggerComponent: React.FC<{ logger: Logger }> = ({ logger }) => {
  const handleClick = () => {
    logger.log("Hello, SOLID!");
  };

  return <button onClick={handleClick}>Log Message</button>;
};

export const SimpleDIP: React.FC = () => (
  <div>
    <h3>Simple DIP Example</h3>
    <LoggerComponent logger={ConsoleLogger} />
    <LoggerComponent logger={AlertLogger} />
  </div>
);
