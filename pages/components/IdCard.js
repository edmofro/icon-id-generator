import { forwardRef } from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";
import { ColoredIcon } from "./ColoredIcon";

const Container = styled.div`
  background-color: white;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 4px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconLabelsContainer = styled.p`
  padding: 5px;
  font-size: 20px;
`;

const OrganisationLabel = styled.p`
  font-size: 16px;
`;
const IssuerLabel = styled.p`
  font-size: 14px;
`;

const StyledQRCode = styled(QRCode)`
  margin-top: 20px;
`;

const getIconLabel = (color, icon) => `${color}-${icon}`;

export const IdCard = forwardRef(function IdCardInternal({ id, icons }, ref) {
  return (
    <Container ref={ref}>
      <IconsContainer>
        {icons.map(([color, icon]) => (
          <ColoredIcon
            key={getIconLabel(color, icon)}
            color={color}
            icon={icon}
          />
        ))}
      </IconsContainer>
      <IconLabelsContainer>
        {icons.map(([color, icon]) => getIconLabel(color, icon)).join(" ")}
      </IconLabelsContainer>
      <OrganisationLabel>{process.env.organization}</OrganisationLabel>
      <IssuerLabel>Issued by: {process.env.issuer}</IssuerLabel>
      <StyledQRCode value={id} size={140} />
    </Container>
  );
});
