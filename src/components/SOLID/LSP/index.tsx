import { createCircle, createRectangle, Shape } from "./shapes";

const LSP: React.FC = () => {
  const shapes: Shape[] = [createCircle(5), createRectangle(10, 20)];
  // similar to function overloading in TS

  return (
    <div>
      <h2>Laskov Subtitution Principle Example</h2>
      {shapes.map((shape, index) => (
        <div key={index}>Area: {shape.area()}</div>
      ))}
    </div>
  );
};

export default LSP;
