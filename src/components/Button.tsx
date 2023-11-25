import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  secondary: boolean;
  icon: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  secondary = false,
}) => {
  return (
    <button
      className={`${secondary ? 'bg-secondary' : 'bg-accent'} ${
        secondary ? 'hover:bg-hoverSecondary' : 'hover:bg-hoverPrimary'
      }`}
      onClick={onClick}
    >
      {icon ? (
        <div className="flex">
          <p>{children}</p>
          <img src={icon} alt="button icon" />
        </div>
      ) : (
        <p>{children}</p>
      )}
    </button>
  );
};

export default Button;
