import { PrimaryButton } from "./PrimaryButton.tsx";
import { SecondaryButton } from "./SecondaryButton.tsx";
import { DangerButton } from "./DangerButton.tsx";

type ButtonFactoryProps = {
  type: "primary" | "secondary" | "danger";
  label: string;
};

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
