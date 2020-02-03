import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Head from "next/head";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Inquisitor from "../components/Inquisitor";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const MyApp = ({ Component, pageProps }) => {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const lsLang = localStorage.getItem("lang");
    if (lsLang) {
      setLang(lsLang);
      return;
    }
    const [browserLang] = navigator.language.split("-");
    if (browserLang === "ru" || browserLang === "uk") {
      setLang("ru");
    }
  }, []);

  const toggleLang = () => {
    if (lang === "en") {
      setLang("ru");
      localStorage.setItem("lang", "ru");
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
    }
  };

  return (
    <Wrapper>
      <Reset />
      <Head>
        <title>Hire Oleg</title>
        <meta
          name="description"
          content="Oleg the front-end web developer made this site to let the world know he is available."
        />
        <meta
          name="keywords"
          content="front end, junior, web developer, hire Oleg, Ukraine, fluent English"
        />
        <meta name="author" content="Oleg Klim" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab|Exo+2&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:image"
          content="https://hire-oleg.now.sh/images/avatar-photo.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:height" content="250" />
        <meta property="og:image:width" content="250" />
      </Head>
      <Navigation lang={lang} toggleLang={toggleLang} />
      <Inquisitor>
        <Component lang={lang} {...pageProps} />
      </Inquisitor>
    </Wrapper>
  );
};

export default MyApp;
