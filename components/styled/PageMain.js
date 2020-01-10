import styled from "styled-components";
import colors from "../../colors";

const PageMain = styled.main`
  background-color: white;
  width: 45vw;
  margin: auto;
  padding: 2rem;
  font-family: "Exo 2", sans-serif;
  color: ${colors.darkGray};
  a {
    color: ${colors.darkGray};
    text-decoration: none;
    border-bottom: 3px solid ${colors.lightBlue};
    transition: 0.25s ease;
    line-height: 1.58;
    &:hover {
      border-bottom: 5px solid ${colors.darkBlue};
    }
  }
  p {
    line-height: 1.58;
    margin: 2.2rem 0;
  }
  summary {
    outline: none;
    cursor: pointer;
    font-size: 1.3rem;
    line-height: 1.58;
    &:hover {
      color: ${colors.darkBlue};
    }
  }
  ul {
    list-style-image: url("/images/muscle.png");
    list-style-position: inside;
    margin: 2.2rem 0;
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
    margin: 0.8rem 0;
    li {
      line-height: 1.3;
      margin-bottom: 0.3rem;
    }
  }
`;

export default PageMain;
