import styled from "styled-components";

const ContactForm = styled.section`
  margin-bottom: 2rem;
  input,
  textarea {
    display: block;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  label {
    margin-left: 1rem;
    margin-bottom: 0.3rem;
    display: block;
  }
  button {
    display: block;
    border: 1px solid #ccc;
    border-radius: 10%;
    padding: 0.2rem 0.6rem;
    margin: auto;
    transition: 0.25s ease;
    font-size: 1.2rem;
    cursor: pointer;
  }
  button:hover {
    background-color: #2d3748;
    color: #fff;
  }
`;

export default ContactForm;
