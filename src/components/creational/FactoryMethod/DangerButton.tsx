import { ButtonProps } from "./ButtonFactory";

export const DangerButton: React.FC<ButtonProps> = ({ label }) => (
  <button
    style={{ backgroundColor: "red", color: "white", padding: "10px 20px" }}
  >
    {label}
  </button>
);
