import React from "react";
import Form from "../components/Form";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";

const Contacts = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <PageTitle lang={lang}>{ru ? "Напишите мне" : "Contact Me"}</PageTitle>
      <Form lang={lang} />
      <p>{ru ? `Телефон` : `Phone`} +38 068 43 88 769</p>
      <p>LinkedIn: https://www.linkedin.com/in/elmaester/</p>
      <p>GitHub: https://github.com/elmaester</p>
      <p>Telegram: https://t.me/elmaester</p>
      <p>Skype: morket2012</p>
    </PageMain>
  );
};

export default Contacts;
