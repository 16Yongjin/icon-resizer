type Props = {
  children?: React.ReactNode;
};

export const FinderHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className="border-b-1 flex w-full items-center justify-between px-4 py-2.5">
      {children}
    </div>
  );
};
