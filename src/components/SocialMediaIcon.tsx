import { FC, ReactNode } from 'react';

interface SocialMediaIconProps {
  children: ReactNode;
  secondary: boolean;
  icon: string;
  onClick: () => void;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({
  children,
  secondary,
  icon,
  onClick,
}) => {
  return <></>;
};

export default SocialMediaIcon;
