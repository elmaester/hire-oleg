import styled from "styled-components";
import { sizes } from "../../variables";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media ${sizes.desktop} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5%;
  }
`;

export default ProjectsContainer;
