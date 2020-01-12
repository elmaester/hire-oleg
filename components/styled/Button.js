import styled from "styled-components";
import { colors } from "../../variables";

const Button = styled.button`
  background-color: ${colors.darkBlue};
  border-radius: 8%;
  padding: 0.7rem 1.4rem;
  transition: 0.25s ease;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
  border: none;
  text-shadow: 1px 1px 1px ${colors.darkGray};
  &:hover {
    background-color: ${colors.lightBlue};
  }
`;

export default Button;
