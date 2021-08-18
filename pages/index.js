import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { saveAs } from "file-saver";
import { toBlob } from "dom-to-image";
import { ControlPane } from "./components/ControlPane";
import { PreviewPane } from "./components/PreviewPane";
import { fetchGeneratedIds } from "./utilities/backend";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Home() {
  const [ids, setIds] = useState(null);
  const idCardRef = useRef([]);
  const handleGenerate = useCallback(
    async (count) => setIds(count ? await fetchGeneratedIds(count) : null),
    []
  );
  const handleDownload = useCallback(() => {
    idCardRef.current.forEach((node, index) =>
      toBlob(node).then(function (blob) {
        saveAs(blob, `${ids[index].id}.png`);
      })
    );
  }, [ids]);

  return (
    <Container>
      <ControlPane
        handleGenerate={handleGenerate}
        handleDownload={ids ? handleDownload : null}
      />
      <PreviewPane ids={ids} idCardRef={idCardRef} />
    </Container>
  );
}
