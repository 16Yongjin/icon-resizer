type Props = {
  children: React.ReactNode;
};

export const Page: React.FC<Props> = ({ children }) => {
  return <div className="h-screen w-screen bg-slate-500">{children}</div>;
};
