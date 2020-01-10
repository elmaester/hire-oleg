import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Head from "next/head";
import colors from "../colors";
import { Reset } from "styled-reset";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${colors.lightGray};
  min-height: 100vh;
`;

const MyApp = ({ Component, pageProps }) => {
  const [lang, setLang] = useState("en");
  const toggleLang = () => (lang === "en" ? setLang("ru") : setLang("en"));
  return (
    <Wrapper>
      <Reset />
      <Head>
        <title>Oleg's Looking for a Job</title>
        <meta
          name="description"
          content="Oleg the front-end web developer made this site to find a job."
        />
        <meta
          name="keywords"
          content="front end, junior, web developer, hire Oleg, Ukraine, fluent English"
        />
        <meta name="author" content="Oleg Klim" />
        <link
          href="https://fonts.googleapis.com/css?family=Lobster|Roboto+Slab|Exo+2&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation lang={lang} toggleLang={toggleLang} />
      <Component lang={lang} {...pageProps} />
    </Wrapper>
  );
};

export default MyApp;
