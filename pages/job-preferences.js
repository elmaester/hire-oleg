import React from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import Highlight from "../components/styled/Highlight";

const JobPreferences = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>Oleg's Looking for a Job - What Kind of Job Does He Want</title>
        <meta
          name="description"
          content="Learn About Oleg's Job Preferences."
        />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Пожелания к работе" : "Job preferences"}
      </PageTitle>
      <p>
        {ru
          ? "Название интересующей меня должности - "
          : "The job title I am interested in is "}
        <Highlight>Junior Front-End Web Developer</Highlight>.
      </p>
      <p>
        {ru
          ? "Технология, с которой мне сильнее всего хотелось бы работать - это React и его экосистема. Я хочу глубоко изучить и стать экспертом в этой области."
          : "The tech I am most eager to work with is React and its ecosystem. I want to learn these things deeply and become an expert."}
      </p>
      <p>
        {ru
          ? "Я не хочу изучать Angular или Vue, пожалуйста, не предлагайте мне это."
          : "I don't want to learn Angular or Vue, not interested in such positions."}
      </p>
      <p>
        {ru
          ? "Я безусловно согласен выполнять некоторый объём работ по вёрстке, но трудоустройство, при котором вёрстка и работа со стилями являлись бы основными (или единственными) моими задачами, было бы неподходящим для меня в долгосрочной перспективе."
          : "I'm certainly ok with doing some styling, but a position where styling is the primary focus would not be right for me in the long-term."}
      </p>
      <p>
        {ru
          ? "Я заинтересован в изучении Node.js в будущем, и в том, чтобы стать full-stack разработчиком."
          : "I am interested in learning Node.js in the future, and becoming a full-stack developer."}
      </p>
      <p>
        {ru
          ? "Моя желаемая зарплата зависит от города. К примеру в Киеве я был бы доволен в диапазоне $800 - $1000."
          : "My salary expectations are location-dependent. For example in Kiev I'd be happy in the $800 - $1000 range."}
      </p>
    </PageMain>
  );
};

export default JobPreferences;
