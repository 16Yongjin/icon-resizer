type Props = {
  children?: React.ReactNode;
};

export const IconUploadSection: React.FC<Props> = ({ children }) => {
  return <div className="flex justify-center py-16">{children}</div>;
};
