import { ButtonFactory } from "./ButtonFactory.tsx";

const FactoryMethod: React.FC = () => {
  return (
    <div>
      <h2>Factory Method Example</h2>
      <ButtonFactory type="primary" label="Primary Button" />
      <ButtonFactory type="secondary" label="Secondary Button" />
      <ButtonFactory type="danger" label="Danger Button" />
    </div>
  );
};

export default FactoryMethod;
