type Props = {
  children?: React.ReactNode;
  image: string;
};

export const IconFilePreview: React.FC<Props> = ({ image }) => {
  return (
    <div className="h-18 flex items-center bg-white">
      <div className="border-1 p-1">
        <img
          src={image}
          alt="icon preview"
          className="object border-1 max-h-16 w-16 object-contain"
        />
      </div>
    </div>
  );
};
