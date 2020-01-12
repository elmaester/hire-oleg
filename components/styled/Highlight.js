import styled from "styled-components";
import { colors } from "../../variables";

const Highlight = styled.strong`
  border: 3px solid ${colors.lightBlue};
  border-radius: 45%;
  font-weight: 900;
  padding: 0.5vw 0.5vw;
  white-space: nowrap;
`;

export default Highlight;
