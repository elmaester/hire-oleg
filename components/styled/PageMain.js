import styled from "styled-components";
import colors from "../../colors";

const PageMain = styled.main`
  background-color: white;
  width: 40vw;
  margin: auto;
  padding: 2rem;
  box-shadow: 0 0.4rem 0.3rem gainsboro;
  border-radius: 0 0 1% 1%;
  border: 1px solid ${colors.darkGray};
  border-top: 0;
  font-family: "Roboto Slab", serif;
  a {
    text-decoration: none;
    color: ${colors.darkGray};
    border-bottom: 3px solid ${colors.lightBlue};
    transition: 0.25s ease;
    line-height: 1.58;
    &:hover {
      border-bottom: 5px solid ${colors.darkBlue};
    }
  }
  p {
    line-height: 1.58;
    margin: 0.7rem 0;
  }
  summary {
    outline: none;
    cursor: pointer;
    font-size: 1.3rem;
    line-height: 1.58;
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
      margin-bottom: 0.3rem;
    }
  }
`;

export default PageMain;
