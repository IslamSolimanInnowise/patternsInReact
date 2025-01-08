export interface BaseButtonProps {
  label: string;
  onClick: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
    {label}
  </button>
);

export default BaseButton;
