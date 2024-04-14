import { useEffect, useRef } from "react";

type Props = {
  children?: React.ReactNode;
  icon?: HTMLImageElement | null;
  onChange?: (icon: HTMLImageElement) => void;
};

const readImage = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = URL.createObjectURL(file);
  });
};

export const IconUpload: React.FC<Props> = ({ children, onChange }) => {
  const $fileInput = useRef<HTMLInputElement>(null);

  const onFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const image = await readImage(file);
    onChange?.(image);
  };

  // Upload default icon for testing
  useEffect(() => {
    if (!import.meta.env.DEV) return;

    const image = new Image();
    image.onload = () => onChange?.(image);
    image.src = "/test-icon.png";
  }, []);

  return (
    <>
      <div
        className="h-32 w-32 cursor-pointer rounded-lg bg-slate-100 shadow"
        onClick={() => $fileInput.current?.click()}
      >
        {children}
      </div>

      <input
        type="file"
        ref={$fileInput}
        className="hidden"
        onChange={onFileUpload}
      />
    </>
  );
};
