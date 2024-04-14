type Props = {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
};

export const FinderSidebarItem: React.FC<Props> = ({
  children,
  selected,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`
        w-full rounded-md px-2 py-1 text-left text-sm text-gray-800
        ${selected ? "bg-gray-400" : ""}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
