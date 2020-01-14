import React from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import Highlight from "../components/styled/Highlight";
import SubHeading from "../components/styled/SubHeading";
import MyPhotoContainer from "../components/styled/MyPhotoContainer";

const Home = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>Oleg's Looking for a Job</title>
        <meta
          name="description"
          content="Welcome to Oleg's website. Please explore and contact him if interested."
        />
      </Head>
      <PageTitle lang="en" style={{ marginBottom: "0" }}>
        Junior Front-End Web Developer
      </PageTitle>
      <SubHeading lang={lang} style={{ marginTop: "0" }}>
        {ru ? "открыт для новых возможностей" : "open to opportunities"}
      </SubHeading>
      <MyPhotoContainer ru={ru}>
        <img src="/images/avatar-photo.jpg" alt="Oleg Klim" />
      </MyPhotoContainer>
      <p>
        {ru
          ? `Здравствуйте, и спасибо, что заглянули!`
          : `Hello and thank you for visiting!`}
      </p>
      <p>
        {ru
          ? `Меня зовут Олег, рад знакомству с Вами.`
          : `My name is Oleg, it's a pleasure to meet you.`}
      </p>
      <p>
        {ru
          ? `Этот сайт служит дополнением к моему `
          : `The purpose of this site is to serve as extension to my `}
        <a
          href="Oleg Klim - React Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "резюме" : "resume"}
        </a>
        {ru
          ? `, предоставляет информацию потенциальным работодателям, и в то же время демонстрирует мои навыки веб-разработки. Я сделал его потому, что в данный момент ищу работу. Я считаю он может сэкономить нам немного времени на предварительном звонке, и даже на собеседовании.`
          : `, provide information to potential employers, while also demonstrating my web development skills. I made it because I am looking for a job at the moment. I believe it can save us some time on screening calls and even the actual interview.`}
      </p>
      <p>
        {ru
          ? `Пожалуйста, воспользуйтесь панелью навигации чтобы ознакомиться с любыми темами, которые Вас заинтересуют. Надеюсь, таким образом Вы найдёте повод, чтобы мы с Вами поговорили, и я жду этого с нетерпением!
`
          : `Please use the navbar to navigate, and explore any topics you find of interest. I hope you can find reasons for us to talk, and I look forward to it!`}
      </p>
      <SubHeading lang="ru">
        {ru ? "Можно на английском языке" : "Russian Language Available"}
      </SubHeading>
      <p>
        {ru
          ? `This website is bilingual, you can switch to `
          : `Это двуязычный сайт, Вы можете переключиться на `}
        <Highlight>{ru ? "English" : "русский язык"}</Highlight>
        {ru
          ? ` in the top right corner of the screen, if you like.`
          : ` в правом верхнем углу экрана, если хотите.`}
      </p>
      <div style={{ clear: "both" }} />
    </PageMain>
  );
};

export default Home;
