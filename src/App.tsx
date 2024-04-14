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

const IconPresets = {
  Default: [16, 32, 64, 128, 256, 512],
  ChromeExt: [16, 48, 128],
};
type IconPreset = keyof typeof IconPresets;

function App() {
  const [icon, setIcon] = useState<HTMLImageElement | null>(null);
  const [iconPreset, setIconPreset] = useState<IconPreset>("Default");

  const resizedIcons = useMemo(() => {
    if (!icon) return [];

    return IconPresets[iconPreset].map((size) => ({
      size,
      image: resizeImage(icon, size, size),
    }));
  }, [icon, iconPreset]);

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
            <FinderSidebarItem
              selected={iconPreset === "Default"}
              onClick={() => setIconPreset("Default")}
            >
              Default
            </FinderSidebarItem>
            <FinderSidebarItem
              selected={iconPreset === "ChromeExt"}
              onClick={() => setIconPreset("ChromeExt")}
            >
              Chrome Ext.
            </FinderSidebarItem>
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
