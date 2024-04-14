import jszip from "jszip";

export const zipImages = async (
  images: { name: string; image: string }[],
): Promise<Blob> => {
  const zip = new jszip();

  const dataUrlToBase64 = (dataUrl: string) => dataUrl.split(",")[1];

  images.forEach(({ name, image }) => {
    zip.file(name, dataUrlToBase64(image), { base64: true });
  });

  return zip.generateAsync({ type: "blob" });
};
