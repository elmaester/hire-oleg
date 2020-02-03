import React, { useEffect } from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import SubHeading from "../components/styled/SubHeading";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Router from "next/router";

const WorkHistory = ({ lang }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  useBottomScrollListener(() => Router.push("/languages"));
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>Where Has He Worked Before - Hire Oleg</title>
        <meta
          name="description"
          content="Learn about Oleg's past and his employment history."
        />
        <meta
          property="og:title"
          content="Where Has He Worked Before - Hire Oleg"
        />
        <meta
          property="og:description"
          content="Learn about Oleg's past and his employment history."
        />
      </Head>
      <PageTitle lang={lang}>
        {ru
          ? "Чем я занимался до этого времени"
          : "What I've done up until now"}
      </PageTitle>
      <p>
        {ru
          ? "Я ищу свою первую работу в IT, но я, конечно же, работал ранее в других отраслях."
          : "I am looking for my first job in IT, but naturally I've worked in other industries before."}
      </p>
      <p>
        {ru
          ? "Как и многие молодые люди по окончании ВУЗа, я попробовал низкоквалифицированный труд, побывал официантом, ночным сторожем и т.д."
          : "As many young people fresh out of university, I've tried low-skilled labor, such as being a waiter, a night guard, etc."}
      </p>
      <p>
        {ru
          ? "Но я хотел бы отметить другую пару основных периодов в контексте этого вопроса."
          : "But there are two other major experiences I'd like to share in the context of this question."}
      </p>
      <SubHeading lang={lang}>{ru ? "Фриланс" : "Freelancing"}</SubHeading>
      <p>
        {ru
          ? "Один из них - это удалённая работа фрилансером. Она имела место на сайте UpWork.com, а также в рамках частных договорённостей. Я предоставлял следующие виды услуг:"
          : "One is remote freelance work, both on UpWork.com, and through private arrangements. I've provided the following kinds of services:"}
      </p>
      <ul>
        <li>{ru ? "Переводы" : "Translation"}</li>
        <li>{ru ? "Субтитры к видео" : "Video subtitling"}</li>
        <li>{ru ? "Голосовая озвучка видео" : "Video voiceover"}</li>
        <li>{ru ? "Поиск информации" : "Web research"}</li>
        <li>{ru ? "Рекрутинг" : "Recruitment"}</li>
        <li>{ru ? "Поиск контактов" : "Contact searching"}</li>
        <li>{ru ? "Виртуальный ассистент" : "Virtual assistance"}</li>
      </ul>
      <p>
        {ru
          ? "А вот некоторые отзывы, полученные мной на UpWork. Мой средний балл был 5.0."
          : "And here is some of the feedback I got on UpWork. My average rating was 5.0."}
      </p>
      <img
        src="/images/upwork-feedback.png"
        alt={ru ? "Отзывы на UpWork" : "UpWork Feedback"}
        style={{
          margin: "0 auto",
          display: "block",
          maxWidth: "100%"
        }}
      />
      <SubHeading lang={lang}>
        {ru ? "Преподавание в Китае" : "Teaching in China"}
      </SubHeading>
      <p>
        {ru
          ? "Другой значительный период - работа учителем английского языка в Китае. Я поработал и в детском саду, и в тренинг центре. Могу отметить в этой связи следующие достижения:"
          : "The other major experience was working as an English teacher in China. Both in kindergarten, and in a training center. Some achievements I can point out are:"}
      </p>
      <ul>
        <li>
          {ru
            ? "Приспособился к иностранной культуре, построил приязненные деловые отношения с иностранными коллегами"
            : "Adapted to a foreign culture, built healthy working relationships with foreign colleagues"}
        </li>
        <li>
          {ru
            ? "Остался и продолжил прилежно работать, вопреки скорому уходу главного учителя, который был мне обещан в качестве наставника"
            : "Stayed on and persevered, despite the head teacher suddenly quitting, and not being able to provide mentorship as agreed"}
        </li>
        <li>
          {ru
            ? "Был избран для проведения демонстрационных уроков, занимался привлечением новых клиентов"
            : "Was chosen to perform demo lessons to attract new business"}
        </li>
        <li>
          {ru
            ? "Развил и улучшил навыки презентации и публичных выступлений"
            : "Learned and practiced presenting, planning and public speaking skills"}
        </li>
        <li>
          {ru
            ? "Отвечал за то, чтобы ученикам было весело, и одновременно они изучали английский язык"
            : "Ensured students had the time of their lives, and also learned some English while they were at it"}
        </li>
      </ul>
      <img
        src="/images/teaching-in-china.jpg"
        alt={
          ru
            ? "Был учителем английского языка в Китае"
            : "Taught English in China"
        }
        style={{
          margin: "0 auto",
          display: "block",
          maxWidth: "100%",
          marginTop: "1rem"
        }}
      />
      <p>
        {ru
          ? "Теперь пришло время воплотить мечту детства и стать профессиональным разработчиком. Быть может, в Вашей компании? ;)"
          : "Now the time has come to fulfill my childhood dream and become a developer professionally. Perhaps at your company? ;)"}
      </p>
    </PageMain>
  );
};

export default WorkHistory;
