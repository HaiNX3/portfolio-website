import { FC, ReactNode } from 'react';

interface LabelInputProps {
  children: ReactNode;
  secondary: boolean;
  icon: string;
  onClick: () => void;
}

const LabelInput: FC<LabelInputProps> = ({
  children,
  secondary,
  icon,
  onClick,
}) => {
  return <></>;
};

export default LabelInput;
