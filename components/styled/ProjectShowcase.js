import styled from "styled-components";
import { sizes, colors } from "../../variables";

const ProjectShowcase = styled.section`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.darkGray};
  font-size: 16px;
  line-height: 1;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2em;
  div.buttons-row {
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
    &.bigger-bottom-margin {
      margin-bottom: 1em;
    }
  }
  img {
    width: 100%;
    margin-bottom: 0;
    border-bottom: 1px dotted ${colors.darkGray};
  }
  h3,
  h4 {
    text-align: center;
    font-weight: 600;
    padding: 1.5% 0;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 2%;
  }
  h4 {
    margin: 2% 0;
    border-top: 1px dotted ${colors.darkGray};
  }
  p,
  ul {
    padding: 0 3%;
    margin: 0;
  }
  li {
    line-height: 0.95 !important;
  }
  a {
    border-bottom: 2px solid ${colors.lightBlue};
    &:hover {
      border-bottom: 3px solid ${colors.darkBlue};
    }
  }
`;

export default ProjectShowcase;
