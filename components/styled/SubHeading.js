import styled from "styled-components";

const SubHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: "Lobster", cursive;
  text-transform: ${props => (props.lang === "ru" ? "none" : "capitalize")};
  margin: 1.8rem 0;
`;

export default SubHeading;
