import styled from "styled-components";
import { colors, sizes } from "../../variables";

const Button = styled.a`
  background-color: ${colors.darkBlue};
  border-radius: 8%;
  padding: 0.4em 0.8em;
  transition: 0.25s ease;
  font-size: 18px;
  cursor: pointer;
  color: white !important;
  border: 0 !important;
  text-shadow: 1px 1px 1px ${colors.darkGray};
  &:hover {
    background-color: ${colors.lightBlue};
  }
  @media ${sizes.phone} {
    font-size: 16px;
    padding: 0.2em 0.4em;
  }
  @media ${sizes.desktop} {
    padding: 0.3em 0.5em;
  }
`;

export default Button;
