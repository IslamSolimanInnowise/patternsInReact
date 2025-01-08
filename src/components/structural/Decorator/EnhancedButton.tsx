import BaseButton, { type BaseButtonProps } from "./BaseButton";

const extraTextDecorator = <P extends BaseButtonProps>(
  WrappedComponent: React.FC<P>
): React.FC<P> => {
  return (props: P) => {
    const newProps = { ...props, label: `${props["label"]} - Extra Text` };

    return <WrappedComponent {...newProps} />;
  };
};

const EnhancedButton = extraTextDecorator(BaseButton);

export default EnhancedButton;
