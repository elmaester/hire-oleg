import styled from "styled-components";
import { colors, sizes } from "../../variables";
const multiplier = 0.75;

const SubHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: "Roboto Slab", serif;
  text-transform: ${props => (props.lang === "ru" ? "none" : "capitalize")};
  color: ${colors.darkGray};
  margin: 2.8vw 0;

  @media ${sizes.phone} {
    font-size: ${36 * multiplier}px;
  }
  @media ${sizes.tablet} {
    font-size: ${40 * multiplier}px;
  }
  @media ${sizes.tabletLandscape} {
    font-size: ${44 * multiplier}px;
  }
  @media ${sizes.desktop} {
    font-size: ${48 * multiplier}px;
  }
  @media ${sizes.desktopWide} {
    font-size: ${56 * multiplier}px;
  }
`;

export default SubHeading;
