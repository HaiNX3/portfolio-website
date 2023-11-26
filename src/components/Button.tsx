import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  icon: string;
  onClick: () => void;
  secondary: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  secondary = false,
}) => (
  <button
    className={`${secondary ? 'bg-secondary' : 'bg-accent'} ${
      secondary ? 'hover:bg-hoverSecondary' : 'hover:bg-hoverPrimary'
    } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base
    sm:text-lg sm:w-fit text-bold relative w-full`}
    onClick={onClick}
    type="button"
  >
    {icon ? (
      <div className="flex items-center gap-2.5 justify-center">
        <p>{children}</p>
        <img alt="button icon" src={icon} />
      </div>
    ) : (
      <p>{children}</p>
    )}
  </button>
);

export default Button;
