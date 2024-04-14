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
  IconDownloadButton,
  FinderContent,
  IconFile,
  IconFilePreview,
  IconFilename,
} from "./components/domain";
import { useState } from "react";

function App() {
  const [icon, setIcon] = useState<string | null>(null);

  return (
    <Page>
      <Header>Icon Resizer</Header>

      <IconUploadSection>
        <IconUpload onChange={setIcon} />
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
              <IconNameInput>Icon</IconNameInput>

              <IconDownloadButton>Download</IconDownloadButton>
            </FinderHeader>

            <FinderContent>
              {Array.from({ length: 20 }).map((_, index) => (
                <IconFile key={index}>
                  <IconFilePreview />
                  <IconFilename>icon-16x16.png</IconFilename>
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
