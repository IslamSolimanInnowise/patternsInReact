export interface Shape {
  area(): number;
}

export const createCircle = (radius: number): Shape => {
  return {
    area: () => Math.PI * radius * radius,
  };
};

export const createRectangle = (width: number, height: number): Shape => {
  return {
    area: () => width * height,
  };
};
