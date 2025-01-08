import Iterator from "./components/behavioral/Iterator";
import Strategy from "./components/behavioral/Strategy";
import FactoryMethod from "./components/creational/FactoryMethod";
import Singleton from "./components/creational/Singleton";
import DIP from "./components/SOLID/DIP";
import ISP from "./components/SOLID/ISP";
import LSP from "./components/SOLID/LSP";
import OCP from "./components/SOLID/OCP";
import SRP from "./components/SOLID/SRP";
import Adapter from "./components/structural/Adapter";
import Decorator from "./components/structural/Decorator";
import Facade from "./components/structural/Facade";

const App: React.FC = () => {
  return (
    <div>
      <h1>These are examples of design pattern and SOLID use cases in React</h1>

      {/* Creational Design Patterns */}
      <FactoryMethod />
      <Singleton />
      {/* Structural Design Patterns */}
      <Adapter />
      <Facade />
      <Decorator />
      {/* Behavioral Design Patterns */}
      <Strategy />
      <Iterator />

      {/* HERE WE HAVE SOLID EXAMPLES */}

      {/* SRP */}
      <SRP />
      {/* OCP */}
      <OCP />
      {/* LSP */}
      <LSP />
      {/* ISP */}
      <ISP />
      {/* DIP */}
      <DIP />
    </div>
  );
};
export default App;
