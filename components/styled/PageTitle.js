import styled from "styled-components";

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: "Lobster", cursive;
  text-transform: ${props => (props.lang === "ru" ? "none" : "capitalize")};
  margin: 1rem 0 3rem;
`;

export default PageTitle;
