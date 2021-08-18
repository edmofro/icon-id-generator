import styled from "styled-components";

const colorToFilter = {
  black: "none",
  red: "invert(15%) sepia(98%) saturate(2630%) hue-rotate(320deg) brightness(100%) contrast(98%)",
  orange:
    "invert(41%) sepia(100%) saturate(2215%) hue-rotate(15deg) brightness(110%) contrast(103%)",
  yellow:
    "invert(96%) sepia(49%) saturate(7489%) hue-rotate(326deg) brightness(102%) contrast(99%)",
  green:
    "invert(46%) sepia(18%) saturate(1505%) hue-rotate(73deg) brightness(95%) contrast(91%)",
  blue: "invert(31%) sepia(55%) saturate(1823%) hue-rotate(188deg) brightness(106%) contrast(91%)",
  purple:
    "invert(15%) sepia(82%) saturate(3286%) hue-rotate(275deg) brightness(91%) contrast(96%)",
  pink: "invert(39%) sepia(68%) saturate(2214%) hue-rotate(314deg) brightness(93%) contrast(99%)",
  brown:
    "invert(31%) sepia(69%) saturate(430%) hue-rotate(341deg) brightness(94%) contrast(90%)",
};

// "red", "orange", "yellow", "green", "blue", "purple",
const ColoredImage = styled.img`
  filter: ${({ color }) => colorToFilter[color]};
`;

export function ColoredIcon({ icon, color }) {
  return (
    <ColoredImage
      src={`/icons/${icon}.png`}
      alt={icon}
      width={100}
      height={100}
      color={color}
    />
  );
}
