type Props = {
  children?: React.ReactNode;
};

export const IconFile: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col items-center gap-2">{children}</div>;
};
