type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-16 w-full items-center justify-center text-2xl font-bold text-white">
      {children}
    </div>
  );
};
