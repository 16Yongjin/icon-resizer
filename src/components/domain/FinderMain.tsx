type Props = {
  children?: React.ReactNode;
};

export const FinderMain: React.FC<Props> = ({ children }) => {
  return <div className="flex w-full flex-col">{children}</div>;
};
