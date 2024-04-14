type Props = {
  children?: React.ReactNode;
};

export const FinderSidebar: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full w-36 bg-gray-300 px-3 pt-14">
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
