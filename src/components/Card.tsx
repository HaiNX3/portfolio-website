import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  secondary: boolean;
  icon: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ children, secondary, icon, onClick }) => <></>;

export default Card;
