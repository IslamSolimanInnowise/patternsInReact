type ButtonProps = {
  label: string;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ label }) => (
  <button
    style={{ backgroundColor: "blue", color: "white", padding: "10px 20px" }}
  >
    {label}
  </button>
);
