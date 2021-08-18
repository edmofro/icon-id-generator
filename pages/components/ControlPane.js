import styled from "styled-components";
import Image from "next/image";
import { GeneratorBox } from "./GeneratorBox";

const Container = styled.div`
  background: white;
  width: 550px;
  padding: 50px;
  border-right: #dcdcdc 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const InfoText = styled.p`
  font-size: 18;
  padding: 38px 0px 38px 0px;
  text-align: center;
`;

export function ControlPane({ handleGenerate, handleDownload }) {
  return (
    <Container>
      <Image
        src="/burnet-logo.png"
        alt="Burnet Institute"
        width="200px"
        height="126px"
      />
      <InfoText>
        This tool generates unique ids, represented by combinations of coloured
        icons
      </InfoText>
      <GeneratorBox
        handleGenerate={handleGenerate}
        handleDownload={handleDownload}
      />
    </Container>
  );
}
