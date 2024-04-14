import { useMemo, useState } from "react";
import { Page, Header } from "./components/layouts";
import {
  IconUploadSection,
  IconUpload,
  IconDownloadSection,
  Finder,
  FinderTrafficLight,
  FinderSidebar,
  FinderSidebarItem,
  FinderHeader,
  FinderMain,
  IconNameInput,
  IconPreview,
  IconDownloadButton,
  FinderContent,
  IconFile,
  IconFilePreview,
  IconFilename,
} from "./components/domain";
import { Title } from "./components/typography";
import { resizeImage } from "./utils";

function App() {
  const [icon, setIcon] = useState<HTMLImageElement | null>(null);
  const [IconSizes] = useState([16, 32, 64, 128, 256, 512]);
  const resizedIcons = useMemo(() => {
    if (!icon) return [];

    return IconSizes.map((size) => ({
      size,
      image: resizeImage(icon, size, size),
    }));
  }, [icon, IconSizes]);

  return (
    <Page>
      <Header>Icon Resizer</Header>

      <IconUploadSection>
        <Title>Your Icon</Title>

        <IconUpload onChange={setIcon}>
          <IconPreview icon={icon} />
        </IconUpload>
      </IconUploadSection>

      <IconDownloadSection>
        <Finder>
          <FinderTrafficLight />

          <FinderSidebar>
            <FinderSidebarItem>Default</FinderSidebarItem>
            <FinderSidebarItem>Chrome Ext.</FinderSidebarItem>
            <FinderSidebarItem>Favicon</FinderSidebarItem>
          </FinderSidebar>

          <FinderMain>
            <FinderHeader>
              <IconNameInput>Resized Icons</IconNameInput>

              <IconDownloadButton>Download</IconDownloadButton>
            </FinderHeader>

            <FinderContent>
              {resizedIcons.map(({ size, image }, index) => (
                <IconFile key={index}>
                  <IconFilePreview image={image} />
                  <IconFilename>
                    icon-{size}x{size}.png
                  </IconFilename>
                </IconFile>
              ))}
            </FinderContent>
          </FinderMain>
        </Finder>
      </IconDownloadSection>
    </Page>
  );
}

export default App;
