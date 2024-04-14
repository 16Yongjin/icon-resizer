type Props = {
  children?: React.ReactNode;
};

export const IconNameInput: React.FC<Props> = ({ children }) => {
  return <div className="font-medium text-gray-600">{children}</div>;
};
