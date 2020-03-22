import styled from "styled-components";
import { colors, sizes } from "../../variables";

const PageMain = styled.main`
  box-sizing: border-box;
  @media ${sizes.phone} {
    width: 100vw;
    padding: 5vw 5vw;
  }
  @media ${sizes.tablet} {
    width: 80vw;
    padding: 6vw 0;
    font-size: 21px;
  }
  @media ${sizes.desktop} {
    width: 60vw;
  }
  @media ${sizes.desktopWide} {
    width: 45vw;
    padding: 4vw 0;
  }
  font-size: 18px;
  line-height: 1.58;
  background-color: white;
  margin: auto;
  font-family: "Exo 2", sans-serif;
  color: ${colors.darkGray};
  a {
    color: ${colors.darkGray};
    text-decoration: none;
    border-bottom: 3px solid ${colors.lightBlue};
    transition: 0.25s ease;
    &:hover {
      border-bottom: 5px solid ${colors.darkBlue};
    }
  }
  p,
  ul,
  ol {
    margin: 1.4vw 0;
  }
  summary {
    outline: none;
    cursor: pointer;
    font-size: 21px;
    &:hover {
      color: ${colors.darkBlue};
    }
    @media ${sizes.tablet} {
      font-size: 24px;
    }
  }
  ul {
    list-style-image: url("/images/muscle.png");
    list-style-position: inside;
    li {
      line-height: 1.3;
    }
  }
  strong {
    font-weight: 600;
  }
  ol {
    list-style: decimal;
    list-style-position: inside;
    li {
      line-height: 1.3;
      margin-bottom: 1vw;
    }
  }
`;

export default PageMain;
