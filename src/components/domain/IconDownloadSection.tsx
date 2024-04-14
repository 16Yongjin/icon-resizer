type Props = {
  children?: React.ReactNode;
};

export const IconDownloadSection: React.FC<Props> = ({ children }) => {
  return <div className="flex justify-center p-8">{children}</div>;
};
