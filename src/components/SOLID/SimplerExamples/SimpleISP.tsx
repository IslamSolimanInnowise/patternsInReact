interface Drivable {
  drive(): void;
}

interface Flyable {
  fly(): void;
}

const Car: React.FC<Drivable> = ({ drive }) => (
  <button onClick={drive}>Drive the car</button>
);

const Plane: React.FC<Drivable & Flyable> = ({ drive, fly }) => (
  <div>
    <button onClick={drive}>Drive the plane</button>
    <button onClick={fly}>Fly the plane</button>
  </div>
);

export const SimpleISP: React.FC = () => (
  <div>
    <h3>Simple ISP Example</h3>
    <Car drive={() => alert("Vroom!")} />
    <Plane
      drive={() => alert("Taxiing on runway!")}
      fly={() => alert("Taking off!")}
    />
  </div>
);
