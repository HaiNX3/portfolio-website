import { FC, ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
  secondary: boolean;
  icon: string;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ children, secondary, icon, onClick }) => {
  return <></>;
};

export default Menu;
