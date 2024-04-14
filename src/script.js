// create a function that accepts array of component names and create react tsx files with fs module
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createReactComponents = (components) => {
  components.forEach((component) => {
    const componentPath = path.join(
      // eslint-disable-next-line no-undef
      __dirname,
      `/components/domain/${component}.tsx`,
    );
    const componentContent = `type Props = {
	children?: React.ReactNode;		
};

export const ${component}: React.FC<Props> = ({ children }) => {
	return <div className="">{children}</div>;
};
`;

    fs.writeFileSync(componentPath, componentContent, { flag: "w" });
  });
};

createReactComponents([
  "IconUpload",
  "IconUploadSection",
  "FinderTrafficLight",
  "FinderSidebar",
  "FinderSidebarItem",
  "IconNameInput",
  "IconDownloadButton",
  "FinderHeader",
  "IconFilePreview",
  "IconFilename",
  "IconFile",
  "FinderContent",
  "Finder",
  "IconDownloadSection",
]);
