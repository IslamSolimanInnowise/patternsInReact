type ButtonProps = {
  label: string;
};

export const SecondaryButton: React.FC<ButtonProps> = ({ label }) => (
  <button
    style={{ backgroundColor: "gray", color: "white", padding: "10px 20px" }}
  >
    {label}
  </button>
);
