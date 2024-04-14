export const FinderTrafficLight: React.FC = () => {
  return (
    <div className="absolute">
      <div className="flex h-12 items-center justify-between gap-2 px-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};
