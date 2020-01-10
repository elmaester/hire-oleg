import styled from "styled-components";

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 4rem 0 3rem 0;
  a {
    border-bottom: none;
    display: inline-block;
    width: 5rem;
    margin: 0 1rem;
    &:hover {
      border-bottom: none;
      width: 6rem;
    }
  }
`;

export default SocialIcons;
