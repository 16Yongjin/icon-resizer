type Props = {
  children?: React.ReactNode;
};

export const FinderHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className="border-b-1 flex w-full justify-between px-4 py-3">
      {children}
    </div>
  );
};
