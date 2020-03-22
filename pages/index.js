import React from "react";
import Link from "next/link";
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
        <title>Hire Oleg</title>
        <meta
          name="description"
          content="Oleg is a Junior Front-End Developer specializing in React. He is open to new employment opportunities."
        />
        <meta property="og:title" content="Hire Oleg" />
        <meta
          property="og:description"
          content="Oleg is a Junior Front-End Developer specializing in React. He is open to new employment opportunities."
        />
        <meta property="og:url" content="https://hire-oleg.now.sh" />
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
          : `The purpose of this site is to serve as an extension to my `}
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
      <SubHeading>
        <Link href="/important-update">
          <a
            style={{
              color: "red",
              textTransform: "uppercase",
              fontWeight: "900"
            }}
          >
            {ru
              ? `Важные новости о ситуации (22.03.2020)`
              : `Important update (22.03.2020)`}
          </a>
        </Link>
      </SubHeading>
      <SubHeading lang={lang}>
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
