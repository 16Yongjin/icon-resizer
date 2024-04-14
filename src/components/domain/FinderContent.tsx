type Props = {
  children?: React.ReactNode;
};

export const FinderContent: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3 overflow-y-auto px-2 py-4">
      {children}
    </div>
  );
};
