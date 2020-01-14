import styled from "styled-components";
import { colors } from "../../variables";

const Highlight = styled.strong`
  border: 3px solid ${colors.lightBlue};
  border-radius: 45%;
  padding: 0.5vw 0.5vw;
  font-weight: 900;
  white-space: nowrap;
`;

export default Highlight;
