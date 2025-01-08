import { Style } from "./buttonStyles";

const CustomBtn: React.FC<Style> = ({ backgroundColor }) => {
  return <button style={{ backgroundColor }}>Click me</button>;
};

export default CustomBtn;
