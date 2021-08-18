import { useCallback, useState } from "react";
import styled from "styled-components";
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
  const handleGenerate = useCallback(
    async (count) => setIds(count ? await fetchGeneratedIds(count) : null),
    []
  );
  const handleDownload = useCallback(
    () => console.log("downloading", ids),
    [ids]
  );

  return (
    <Container>
      <ControlPane
        handleGenerate={handleGenerate}
        handleDownload={ids ? handleDownload : null}
      />
      <PreviewPane ids={ids} />
    </Container>
  );
}
