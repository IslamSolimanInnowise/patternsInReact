interface Animal {
  eat(): string;
  sleep(): string;
}

export interface Flyable extends Animal {
  fly(): string;
}

export interface Swimmable extends Animal {
  swim(): string;
}
