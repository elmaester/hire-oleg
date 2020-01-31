import React, { useEffect } from "react";
import Head from "next/head";
import Form from "../components/Form";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import Telegram from "../public/images/app-icons/telegram.svg";
import Skype from "../public/images/app-icons/skype.svg";
import LinkedIn from "../public/images/app-icons/linkedin.svg";
import GitHub from "../public/images/app-icons/github.svg";
import Resume from "../public/images/app-icons/resume.svg";
import SocialIcons from "../components/styled/SocialIcons";

const Contacts = ({ lang }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  let ru = lang === "ru";
  return (
    <PageMain style={{ paddingBottom: "20px" }}>
      <Head>
        <title>Hire Oleg - How to Contact Him</title>
        <meta
          name="description"
          content="You can contact Oleg through this form, or on other sites and apps listed below."
        />
      </Head>
      <PageTitle lang={lang}>{ru ? "Напишите мне" : "Contact Me"}</PageTitle>
      <Form lang={lang} />
      <SocialIcons>
        <a
          href="https://github.com/elmaester"
          target="_blank"
          rel="noopener noreferrer"
          alt="elmaester"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/elmaester/"
          target="_blank"
          rel="noopener noreferrer"
          alt="elmaester"
        >
          <LinkedIn />
        </a>
        <a
          href="Oleg Klim - React Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          alt="Job Resume"
        >
          <Resume />
        </a>
        <a
          href="https://t.me/elmaester"
          target="_blank"
          rel="noopener noreferrer"
          alt="elmaester"
        >
          <Telegram />
        </a>
        <a
          href="skype:morket2012?chat"
          target="_blank"
          rel="noopener noreferrer"
          alt="morket2012"
        >
          <Skype />
        </a>
      </SocialIcons>
      <span style={{ display: "block", textAlign: "center" }}>
        {ru ? `Телефон:` : `Phone:`} +38 068 43 88 769
      </span>
    </PageMain>
  );
};

export default Contacts;
