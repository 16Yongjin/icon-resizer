type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export const IconDownloadButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="rounded px-2 py-1 font-medium text-gray-600 hover:bg-gray-200 active:bg-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
