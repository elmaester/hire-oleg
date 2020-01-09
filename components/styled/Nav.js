import styled from "styled-components";
import colors from "../../colors";

const Nav = styled.nav`
  background-color: ${colors.darkGray};
  border-bottom: 2px solid ${colors.darkBlue};
  position: sticky;
  top: 0;

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: 400;
    transition: 0.25s ease;
    line-height: 2rem;
    &:hover {
      color: ${colors.yellow};
    }
    &.active-page-link {
      color: ${colors.yellow};
      font-weight: 600;
    }
  }
  .eng {
    color: ${props => (props.lang === "en" ? colors.yellow : "white")};
    font-weight: ${props => (props.lang === "en" ? "600" : "normal")};
  }
  .rus {
    color: ${props => (props.lang === "ru" ? colors.yellow : "white")};
    font-weight: ${props => (props.lang === "ru" ? "600" : "normal")};
  }
`;

export default Nav;
