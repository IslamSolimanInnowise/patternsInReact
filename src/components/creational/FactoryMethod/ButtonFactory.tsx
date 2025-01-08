import { PrimaryButton } from "./PrimaryButton.tsx";
import { SecondaryButton } from "./SecondaryButton.tsx";
import { DangerButton } from "./DangerButton.tsx";

export interface ButtonProps {
  label: string;
}

interface ButtonFactoryProps extends ButtonProps {
  type: "primary" | "secondary" | "danger";
}

export const ButtonFactory: React.FC<ButtonFactoryProps> = ({
  type,
  label,
}) => {
  switch (type) {
    case "primary":
      return <PrimaryButton label={label} />;
    case "secondary":
      return <SecondaryButton label={label} />;
    case "danger":
      return <DangerButton label={label} />;
    default:
      throw new Error(`Unknown button type: ${type}`);
  }
};
