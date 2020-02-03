import React, { useEffect } from "react";
import Head from "next/head";
import PageTitle from "../components/styled/PageTitle";
import PageMain from "../components/styled/PageMain";
import SubHeading from "../components/styled/SubHeading";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Router from "next/router";

const Languages = ({ lang }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  useBottomScrollListener(() => Router.push("/philosophy"));
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>Which Languages Can He Speak - Hire Oleg</title>
        <meta
          name="description"
          content="Find out which languages Oleg can use at work."
        />
        <meta
          property="og:title"
          content="Which Languages Can He Speak - Hire Oleg"
        />
        <meta
          property="og:description"
          content="Find out which languages Oleg can use at work."
        />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Как дела с языками" : "What about spoken languages"}
      </PageTitle>
      <p>
        {ru
          ? `Я, по большей части, русскоговорящий украинец. На украинском я тоже свободно говорю, но предпочитаю говорить на русском.`
          : `I am a primarily Russian-speaking Ukrainian person. I speak Ukrainian fluently too, but prefer to speak Russian.`}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Свободный английский" : "Fluent English"}
      </SubHeading>
      <p>
        {ru
          ? `Я свободно говорю на английском, и это ещё слабо сказано. Носители языка регулярно бывают поражены уровнем моего английского. Они часто говорят мне, что мой английский - лучше, чем у любого другого не нативного человека, знакомого им. Был и такой забавный вопрос: "почему твой английский настолько хорош?". В почти обвинительной интонации, хаха. И я сам тоже считаю, что довольно близок к нативному уровню владения.`
          : `I am a fluent English speaker, in fact that's an understatement. Native speakers are typically very impressed with my English proficiency. They often tell me my English is the best they've ever heard from a non-native person. One funny question I got asked was "why is your English so good?". Almost like an accusation, haha. Anyway, I do think myself that I'm quite close to native level of ability.`}
      </p>
      <p>
        {ru
          ? `Люди часто спрашивают как я выучил английский. Я отвечаю, что просто заразился им, словно гриппом.`
          : `People often ask how I learned. I say that I just caught English, like the flu.`}
      </p>
      <p>
        {ru
          ? `Потому что реальный ответ прозаичен: я просто учился, как и любой другой человек может это делать. Читал книги, разговаривал с людьми, слушал музыку, смотрел видео. "Секрет" в том, чтобы часто сталкиваться с языком, и часто практиковаться. Должна иметь место реальная необходимость в иностранном языке, и должно быть много случаев, чтобы им пользоваться. По моему убеждению, таковы условия эффективного обучения. Учитывая доминирующую роль, которую занимает в мире английский язык в наше время, никакой другой язык не соответствует упомянутым критериям настолько же сильно. Я извлёк безмерно много пользы из плодов вложенных усилий. Способность говорить на английском - один из моих ценнейших активов в жизни.`
          : `Because the real answer is trivial: I just learned like anyone might. By reading books, speaking to people, listening to music, watching videos. The "secret" is a lot of exposure, and a lot of practice. There has to be a real need for the foreign language, and there has to be opportunity to use it. Those are, in my opinion, the conditions for effective learning. With English currently enjoying such a dominant position in the world, no other language meets those criteria quite as strongly. I've benefited immensely from the effort I put in. Speaking English is one of my biggest assets in life.`}
      </p>
      <SubHeading lang={lang}>{ru ? "Другие" : "Others"}</SubHeading>
      <p>
        {ru
          ? `Проживая некоторое время в Китае, я познакомился с основами государственного варианта языка. Хотел бы продолжить его изучение когда-нибудь.`
          : `As a requirement for obtaining citizenship, I learned some Romanian. While living in China, I learned the basics of Mandarin Chinese. I would like to continue learning both of these languages someday.`}
      </p>
    </PageMain>
  );
};

export default Languages;
