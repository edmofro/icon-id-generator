import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useCallback } from "react";

const Container = styled.div`
  box-shadow: 0px 0px 12px 0px #00000026;
  border-radius: 3px;
  padding: 40px;
`;

const LabelText = styled.p`
  font-size: 16px;
`;

const NumberInput = styled(Input)`
  height: 50px;
  width: 370px;
  border-radius: 3px;
  border: 1px solid #dedee0;
  margin: 20px 0px 20px 0px;
  padding-left: 20px;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const DownloadButton = styled(Button)`
  width: 370px;
  height: 50px;

  .MuiButton-label {
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    text-transform: none;
    color: white;
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1.0")};
  }
`;

const HelperText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: #5d676c;
  margin: 18px;
`;

export function GeneratorBox({ handleGenerate, handleDownload }) {
  const handleChange = useCallback(
    (e) => handleGenerate(e.target.value),
    [handleGenerate]
  );

  return (
    <Container>
      <LabelText>How many IDs would you like to generate?</LabelText>
      <NumberInput
        disableUnderline
        type="number"
        placeholder="Number of IDs"
        onChange={handleChange}
      />
      <DownloadButton
        variant="contained"
        color="primary"
        disableElevation
        disabled={!handleDownload}
        onClick={handleDownload}
      >
        Download
      </DownloadButton>
      <HelperText>
        Downloading will mark these ids as used so they won’t show up again
      </HelperText>
    </Container>
  );
}
