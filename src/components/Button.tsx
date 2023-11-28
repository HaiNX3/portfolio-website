import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  iconSrc: string;
  onClick: () => void;
  secondary: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  iconSrc,
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
    {iconSrc ? (
      <div className="flex items-center gap-2.5 justify-center">
        <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
        <img alt="button icon" src={iconSrc} />
      </div>
    ) : (
      <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
    )}
  </button>
);

export default Button;
