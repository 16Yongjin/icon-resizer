type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => {
  return <div className="text-white">{children}</div>;
};
