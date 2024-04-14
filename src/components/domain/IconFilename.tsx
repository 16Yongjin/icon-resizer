type Props = {
  children?: React.ReactNode;
};

export const IconFilename: React.FC<Props> = ({ children }) => {
  return <div className="w-28 text-center text-xs">{children}</div>;
};
