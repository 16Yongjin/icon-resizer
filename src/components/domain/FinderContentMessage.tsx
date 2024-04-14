type Props = {
  children?: React.ReactNode;
};

export const FinderContentMessage: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-64 w-full items-center justify-center text-gray-500">
      {children}
    </div>
  );
};
