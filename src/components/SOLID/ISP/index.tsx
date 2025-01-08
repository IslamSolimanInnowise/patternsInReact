import { Flyable, Swimmable } from "./animal";

const ISP: React.FC = () => {
  const bird: Flyable = {
    eat: () => "Eating seeds",
    sleep: () => "Sleeping in the nest",
    fly: () => "Flying",
  };

  const fish: Swimmable = {
    eat: () => "Eating fish food",
    sleep: () => "Sleeping in water",
    swim: () => "Swimming",
  };

  return (
    <div>
      <h2>Interface Segregation Principle Example</h2>
      <div>
        <p>Bird:</p>
        <p>{bird.eat()}</p>
        <p>{bird.sleep()}</p>
        <p>{bird.fly()}</p>
      </div>
      <div>
        <p>Fish:</p>
        <p>{fish.eat()}</p>
        <p>{fish.sleep()}</p>
        <p>{fish.swim()}</p>
      </div>
    </div>
  );
};

export default ISP;
