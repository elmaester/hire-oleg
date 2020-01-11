import styled from "styled-components";
import { colors, sizes } from "../../variables";

const PageTitle = styled.h1`
  text-align: center;
  font-family: "Roboto Slab", serif;
  text-transform: ${props => (props.lang === "ru" ? "none" : "capitalize")};
  color: ${colors.darkGray};
  margin-bottom: 3vw;

  @media ${sizes.phone} {
    font-size: 36px;
  }
  @media ${sizes.tablet} {
    font-size: 40px;
  }
  @media ${sizes.tabletLandscape} {
    font-size: 44px;
  }
  @media ${sizes.desktop} {
    font-size: 48px;
  }
  @media ${sizes.desktopWide} {
    font-size: 56px;
  }
`;

export default PageTitle;
