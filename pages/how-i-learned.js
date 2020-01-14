import React from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import SubHeading from "../components/styled/SubHeading";

const HowILearned = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>
          Oleg's Looking for a Job - How He Learned to be a Developer
        </title>
        <meta
          name="description"
          content="Learn about Oleg's journey to becoming the developer he is today."
        />
      </Head>
      <PageTitle lang={lang}>{ru ? "Как я учился" : "How I learned"}</PageTitle>
      <p>
        {ru
          ? "Моё обучение IT происходило рывками, с интервалами."
          : "My IT learning happened in bursts, with intervals."}
      </p>
      <p>
        {ru
          ? "Первое знакомство произошло ещё в школе, где мы изучали QBASIC."
          : "I got some early exposure still in high school, where we learned QBASIC."}
      </p>
      <p>
        {ru
          ? "Позже я выучил HTML и немного CSS, потому что мне хотелось уметь создавать веб-страницы и выкладывать их в интернет."
          : "Later I learned HTML and some CSS, because I liked being able to make web pages and put them on the internet."}
      </p>
      <p>
        {ru
          ? "Моё первое полновесное погружение в программирование было с Java. Я купил подписку на курс JavaRush, который в то время рекламировали ВКонтакте. Я прошёл все темы, предшествующие теме многопоточности, после чего сделал перерыв."
          : "My first proper programming initiation was with Java. I bought a subscription to the JavaRush training course, which was advertised on the VK social network at the time. I've made it all the way to the topic of multithreading back then, and took a break."}
      </p>
      <p>
        {ru
          ? "Я немножко экспериментировал с Python."
          : "I've dabbled into Python a little."}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Важная часть" : "The important bit"}
      </SubHeading>
      <p>
        {ru
          ? "Затем я серьёзно взялся за изучение HTML и CSS, и начал делать более продвинутые вещи. В этот период я сверстал некоторое количество лендингов с целью тренировки."
          : "Then I got serious about learning HTML and CSS, and I got deep and did more advanced things. I've built landing pages for practice."}
      </p>
      <p>
        {ru
          ? "После того, я принял решение, что всё-таки буду стремиться к профессиональной карьере в веб-разработке. Все сомнения остались позади, и темп учёбы значительно ускорился."
          : "After that, I decided I would actually seek a career in web development. All doubt was gone and the pace of learning quickened significantly."}
      </p>
      <p>
        {ru ? "Я выучил JavaScript на " : "I learned JavaScript at "}
        <a
          href="https://freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Free Code Camp
        </a>
        .
      </p>
      <p>
        {ru
          ? "Я изучил Elm из его документации."
          : "I learned Elm from its documentation."}
      </p>
      <p>
        {ru
          ? "Я учил React при помощи курса на Udemy за авторством "
          : "I learned React from a Udemy course by "}
        <a
          href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andrei Neagoie
        </a>
        .
      </p>
      <p>
        {ru
          ? "Я упражнялся и делал практические проекты. По ходу дела я познакомился с другими технологиями, такими как Next.js и TypeScript."
          : "I've done projects for practice. I learned more things along the way, like Next.js and TypeScript."}
      </p>
      <SubHeading lang={lang}>
        {ru ? "А в данный момент..." : "And now..."}
      </SubHeading>
      <p>
        {ru
          ? "В данный момент я изучаю следующие курсы:"
          : "Currently I am learning from the following courses:"}
      </p>
      <ul>
        <li>
          <a
            href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Master the Coding Interview: Data Structures + Algorithms
          </a>
        </li>
        <li>
          <a
            href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Complete Node.js Developer Course (3rd Edition)
          </a>
        </li>
      </ul>
      <p>
        {ru
          ? "Также я тренируюсь решать задачи на "
          : "Also I exercise my problem solving skills on "}
        <a
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LeetCode
        </a>
        {ru
          ? " и других подобных сайтах и ивентах."
          : " and other similar sites and events."}
      </p>
    </PageMain>
  );
};

export default HowILearned;
