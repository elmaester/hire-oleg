import styled from "styled-components";
import colors from "../../colors";

const SubHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: "Roboto Slab", serif;
  text-transform: ${props => (props.lang === "ru" ? "none" : "capitalize")};
  margin: 1.8rem 0;
  color: ${colors.darkGray};
  opacity: 0.84;
`;

export default SubHeading;
