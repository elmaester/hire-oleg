import styled from "styled-components";

const ContactForm = styled.section`
  margin-bottom: 2rem;
  input,
  textarea {
    display: block;
    box-sizing: border-box;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 0.5rem;
    font-size: 26px;
    line-height: 1.4;
    font-family: "Exo 2", monospace;
    padding: 0 0.8rem;
  }
  label {
    margin-left: 1rem;
    margin-bottom: 0.3vw;
    margin-top: 0.8vw;
    display: block;
  }
`;

export default ContactForm;
