type Props = {
  children?: React.ReactNode;
};

export const FinderSidebarItem: React.FC<Props> = ({ children }) => {
  return <div className="text-sm text-gray-800">{children}</div>;
};
