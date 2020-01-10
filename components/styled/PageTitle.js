import styled from "styled-components";
import colors from "../../colors";

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: "Roboto Slab", serif;
  text-transform: ${props => (props.lang === "ru" ? "none" : "capitalize")};
  margin: 1rem 0 3rem;
  color: ${colors.darkGray};
  opacity: 0.84;
`;

export default PageTitle;
