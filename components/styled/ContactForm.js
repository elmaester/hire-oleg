import styled from "styled-components";
import colors from "../../colors";

const ContactForm = styled.section`
  margin-bottom: 2rem;
  input,
  textarea {
    display: block;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
    line-height: 1.4;
    font-family: "Exo 2", monospace;
    padding: 0 0.8rem;
  }
  label {
    margin-left: 1rem;
    margin-bottom: 0.3rem;
    display: block;
  }
  button {
    display: block;
    background-color: ${colors.darkBlue};
    border-radius: 8%;
    padding: 0.5rem 1rem;
    margin: auto;
    transition: 0.25s ease;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    border: none;
    text-shadow: 1px 1px 1px ${colors.darkGray};
  }
  button:hover {
    background-color: ${colors.lightBlue};
  }
`;

export default ContactForm;
