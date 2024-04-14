type Props = {
  children?: React.ReactNode;
};

export const FinderHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full justify-between border-b-2 px-4 py-3">
      {children}
    </div>
  );
};
