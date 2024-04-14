import { useRef } from "react";

type Props = {
  children?: React.ReactNode;
  onChange?: (icon: string) => void;
};

export const IconUpload: React.FC<Props> = ({ onChange }) => {
  const $fileInput = useRef<HTMLInputElement>(null);

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      console.log(result);
      onChange?.(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div
        className="h-32 w-32 cursor-pointer rounded-lg bg-slate-100"
        onClick={() => $fileInput.current?.click()}
      ></div>
      <input
        type="file"
        ref={$fileInput}
        className="hidden"
        onChange={onFileUpload}
      />
    </>
  );
};
