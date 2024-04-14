type Props = {
  children?: React.ReactNode;
};

export const Finder: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-96 w-full max-w-3xl overflow-hidden rounded-lg bg-white">
      <div className="flex w-full">{children}</div>
    </div>
  );
};
