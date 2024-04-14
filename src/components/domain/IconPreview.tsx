type Props = {
  children?: React.ReactNode;
  icon?: HTMLImageElement | null;
};

export const IconPreview: React.FC<Props> = ({ icon }) => {
  return icon ? (
    <img
      src={icon.src}
      alt="icon preview"
      className="h-full w-full object-contain p-2"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center text-center">
      Upload
      <br />
      your icon
      <br />
      here
    </div>
  );
};
