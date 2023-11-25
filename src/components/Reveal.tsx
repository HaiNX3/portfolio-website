import { FC, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  secondary: boolean;
  icon: string;
  onClick: () => void;
}

const Reveal: FC<RevealProps> = ({ children, secondary, icon, onClick }) => {
  return <></>;
};

export default Reveal;
