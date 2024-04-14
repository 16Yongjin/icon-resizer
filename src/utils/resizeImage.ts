export const resizeImage = (
  img: HTMLImageElement,
  maxWidth: number,
  maxHeight: number,
): string => {
  let width = img.width;
  let height = img.height;

  // Calculate new dimensions
  if (width > height) {
    if (width > maxWidth) {
      height *= maxWidth / width;
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width *= maxHeight / height;
      height = maxHeight;
    }
  }

  // Create canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas context is null");

  canvas.width = width;
  canvas.height = height;

  // Draw image onto canvas
  ctx.drawImage(img, 0, 0, width, height);

  // Get data URL of resized image
  const resizedDataUrl = canvas.toDataURL("image/png"); // Change image type if necessary

  return resizedDataUrl;
};
