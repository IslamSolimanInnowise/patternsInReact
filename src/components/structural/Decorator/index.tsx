import EnhancedButton from "./EnhancedButton";

const Decorator: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h2>Decorator Pattern Example</h2>
      <EnhancedButton label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default Decorator;
