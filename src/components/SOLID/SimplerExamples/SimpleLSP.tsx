type ShapeProps = { color: string };

const Circle: React.FC<ShapeProps> = ({ color }) => (
  <div
    style={{
      width: 50,
      height: 50,
      borderRadius: "50%",
      backgroundColor: color,
    }}
  />
);

const Square: React.FC<ShapeProps> = ({ color }) => (
  <div style={{ width: 50, height: 50, backgroundColor: color }} />
);

export const SimpleLSP: React.FC = () => (
  <div>
    <h3>Simple LSP Example</h3>
    <Circle color="red" />
    <Square color="blue" />
  </div>
);
