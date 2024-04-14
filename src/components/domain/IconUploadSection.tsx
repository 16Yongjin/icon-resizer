type Props = {
  children?: React.ReactNode;
};

export const IconUploadSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-12">
      {children}
    </div>
  );
};
