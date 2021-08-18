import styled from "styled-components";
import { IdCard } from "./IdCard";

const Container = styled.div`
  background: #e5e5e5;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;

const PlaceholderContainer = styled(Container)`
  justify-content: center;
`;

const PreviewPlaceholder = styled.div`
  width: 534px;
  height: 475px;
  background: #c4c4c4;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const IdCardContainer = styled.div`
  margin: 50px 105px 50px 105px;
`;

export function PreviewPane({ ids }) {
  if (!ids) {
    return (
      <PlaceholderContainer>
        <PreviewPlaceholder>
          Id cards will show up here once generated
        </PreviewPlaceholder>
      </PlaceholderContainer>
    );
  }

  return (
    <Container>
      {ids.map(({ id, icons }, index) => (
        <IdCardContainer key={id}>
          <p>
            ID {index + 1}: {id}
          </p>
          <IdCard id={id} icons={icons} />
        </IdCardContainer>
      ))}
    </Container>
  );
}
