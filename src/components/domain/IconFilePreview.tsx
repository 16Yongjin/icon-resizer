type Props = {
  children?: React.ReactNode;
};

export const IconFilePreview: React.FC<Props> = () => {
  return (
    <div className="border-1 bg-white p-1">
      <img
        src="https://via.placeholder.com/100"
        alt="icon preview"
        className="border-1 h-16 w-16"
      />
    </div>
  );
};
