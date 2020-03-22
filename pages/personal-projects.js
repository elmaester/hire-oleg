import React from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import SubHeading from "../components/styled/SubHeading";
import Button from "../components/styled/Button";
import ProjectShowcase from "../components/styled/ProjectShowcase";
import ProjectsContainer from "../components/styled/ProjectsContainer";

const PersonalProjects = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>His Completed Projects - Hire Oleg</title>
        <meta
          name="description"
          content="Take a look at some cool things Oleg has made."
        />
        <meta property="og:title" content="His Completed Projects" />
        <meta
          property="og:description"
          content="Take a look at some cool things Oleg has made."
        />
        <meta
          property="og:url"
          content="https://hire-oleg.now.sh/personal-projects"
        />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Мои проекты" : "Personal projects"}
      </PageTitle>
      <p>
        {ru
          ? "Здесь я хочу показать свой практический опыт в написании кода, и некоторые поделки, которые я создал в процессе обучения."
          : "In this section I would like to show some practical coding experience I've accumulated, and the things I've built as I learned."}
      </p>
      <ProjectsContainer>
        <ProjectShowcase>
          <img src="/images/projects/harmonica-assistant.png" />
          <h3>
            {ru
              ? "Помощник для губной гармошки на "
              : "Harmonica Assistant in "}
            Elm
          </h3>
          <p>
            {ru
              ? "Это приложение я создал потому, что оно было нужно мне самому, и это самый осмысленный из моих проектов на данный момент. Он помогает музыкантам, играющим на губной гармошке, подбирать мелодии на слух используя виртуальное пианино, но на выходе получать табы для губной гармошки и играть по ним с уверенностью."
              : "This is an app I made to scratch my own itch, and the most personal and meaningful project I've done so far. It helps harmonica players pick any tune they like by ear using a virtual piano, but then get harmonica tabs to play with confidence."}
          </p>
          <div className="buttons-row bigger-bottom-margin">
            <Button
              href="https://elmaester.github.io/harmonica-assistant"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/harmonica-assistant/blob/master/src/Main.elm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Код" : "Code"}
            </Button>
            <Button
              href="https://youtu.be/mnL2xXTgdQc"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Видео демо (англ)" : "Demo Video"}
            </Button>
          </div>
          <h4>{ru ? "Технологии и фичи:" : "Techs & Features:"}</h4>
          <p>
            <a
              href="https://elm-lang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elm
            </a>
            ,{" "}
            <a
              href="https://tachyons.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tachyons
            </a>
            , Elm Architecture, responsive,{" "}
            <span style={{ whiteSpace: "nowrap" }}>static typing</span>,{" "}
            <span style={{ whiteSpace: "nowrap" }}>functional programming</span>
            , <span style={{ whiteSpace: "nowrap" }}>pure functions</span>,
            transposition
          </p>
          <h4>{ru ? "Непростые задачи:" : "Challenges:"}</h4>
          <ul>
            <li>
              {ru
                ? "Понимание Elm и его архитектуры"
                : "Understanding Elm and its architecture"}
            </li>
            <li>
              {ru
                ? "Продумывание логики трансформации строк"
                : "Thinking through the logic of string transformations"}
            </li>
            <li>
              {ru
                ? "Вникание в музыкальную теорию для достижения корректных результатов"
                : "Researching music theory to achieve correct results"}
            </li>
            <li>
              {ru
                ? "Разработка пользовательского интерфейса и стилей"
                : "Designing the UI and styling"}
            </li>
          </ul>
        </ProjectShowcase>
        <ProjectShowcase>
          <img src="/images/projects/clothes-shop.png" />
          <h3>{ru ? "Магазин одежды на " : "Clothing Shop in "}React</h3>
          <p>
            {ru
              ? "Сделан во время изучения React'а. Это сайт электронной коммерции, где посетители могли бы покупать одежду. Имеется авторизация, база данных, выпадающая корзина покупателя, подключён Stripe в тестовом режиме."
              : "This site was built while learning React. It is an e-commerce website where visitors would be able to buy clothes. There is authentication, back-end database, cart dropdown, stripe integration in test mode."}
          </p>
          <div className="buttons-row bigger-bottom-margin">
            <Button
              href="https://crwnshop.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/crwn-clothing"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Курс" : "Course"}
            </Button>
          </div>
          <h4>{ru ? "Технологии и фичи:" : "Techs & Features:"}</h4>
          <p>
            JavaScript, JSX, CSS, React,{" "}
            <span style={{ whiteSpace: "nowrap" }}>functional components</span>,
            React Router, React Hooks, Context API, Redux, Redux Persist,
            Thunks, Redux Saga, Firebase, Heroku, Stripe,{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              HOC - higher order components
            </span>
            ,{" "}
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ whiteSpace: "nowrap" }}
            >
              Styled Components
            </a>
            , API, JSON, forms,{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              email and Google authentication
            </span>
            , cart dropdown
          </p>
          <h4>{ru ? "Непростые задачи:" : "Challenges:"}</h4>
          <ul>
            <li>
              {ru
                ? "Постоянное изучение новых продвинутых технологий"
                : "Constantly learning new advanced technologies"}
            </li>
            <li>
              {ru
                ? "Понимание стоящей за ними теории на абстрактном уровне"
                : "Understanding high level theory behind them"}
            </li>
            <li>
              {ru
                ? "Переделывание вещей несколькими способами, с целью расширения кругозора"
                : "Redoing things in several different ways, for learning purposes"}
            </li>
            <li>
              {ru
                ? "Большое количество взаимодействия с API и асинхронного программирования"
                : "Getting a lot of exposure to APIs and asynchronous programming"}
            </li>
          </ul>
        </ProjectShowcase>
      </ProjectsContainer>
      <SubHeading lang={lang}>
        {ru ? "Упражнения на вёрстку" : "CSS Landing Pages"}
      </SubHeading>
      <p>
        {ru
          ? "Эти лендинги я сверстал до того, как изучил JavaScript. Все с использованием Bootstrap. Моей целью было улучшить навыки работы со стилями, CSS, а также освоить основы дизайна."
          : "I've made these for practice before I learned JavaScript. Used Bootstrap for all of them. My goal was to get better at styling, CSS and design basics."}
      </p>
      <ProjectsContainer>
        <ProjectShowcase>
          <img src="/images/projects/konung-club.png" />
          <h3>Konung Club</h3>
          <p>
            {ru
              ? "Гипотетический клуб исторической реконструкции. Здесь из интересного - видео в качестве фона. Я использовал для этого jQuery плагин."
              : "Hypothetical historical reconstruction club. Worth mentioning here is the video background. I used a jQuery plugin to achieve it."}
          </p>
          <div className="buttons-row">
            <Button
              href="https://elmaester.github.io/css-videobg-konung-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/css-videobg-konung-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </ProjectShowcase>
        <ProjectShowcase>
          <img src="/images/projects/dream-life.png" />
          <h3>Dream Life</h3>
          <p>
            {ru
              ? "Мой самостоятельный дизайн. Гипотетическая фирма на тему личностоного развития. Здесь использованы нешаблонные css анимации, размытие фона, слайдер от Bootstrap."
              : "My own attempt at design. Hypothetical personal development company. Includes custom css animations, blurred background, Bootstrap slider."}
          </p>
          <div className="buttons-row">
            <Button
              href="https://elmaester.github.io/css-dream-life"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/css-dream-life"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </ProjectShowcase>
        <ProjectShowcase>
          <img src="/images/projects/aurora-grove.png" />
          <h3>Aurora Grove</h3>
          <p>
            {ru
              ? "Просто красивый сайт гипотетической фирмы по активному отдыху."
              : "Just a nice camping-themed hypothetical website."}
          </p>
          <div className="buttons-row">
            <Button
              href="https://elmaester.github.io/css-aurora-grove"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/css-aurora-grove"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </ProjectShowcase>
        <ProjectShowcase>
          <img src="/images/projects/vmware-copy.png" />
          <h3>VM Ware Website Copy</h3>
          <p>
            {ru
              ? "Друг посоветовал мне попробовать скопировать главную страницу сайта VM Ware."
              : "A friend suggested that I should try to copy the VM Ware website's main page."}
          </p>
          <div className="buttons-row">
            <Button
              href="https://elmaester.github.io/copy-vmware"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/copy-vmware"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </ProjectShowcase>
        <ProjectShowcase>
          <img src="/images/projects/mizuxe.png" />
          <h3>Mizuxe</h3>
          <p>
            {ru
              ? "Сайт для продвижения гипотетической книги. Здесь присутствуют hover-эффекты, аккордеон и scrollspy."
              : "Promotional website for a hypothetical book. Has cool hover effects, accordion and scrollspy."}
          </p>
          <div className="buttons-row">
            <Button
              href="https://elmaester.github.io/css-mizuxe"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/css-mizuxe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </ProjectShowcase>
        <ProjectShowcase>
          <img src="/images/projects/loop-lab.png" />
          <h3>LoopLab</h3>
          <p>
            {ru
              ? "Рекламируем гипотетическое социальное приложение. Присутствует плавная перемотка по клику на ссылки навигации, scrollspy, формы, эффекты на изображениях и hover."
              : "Advertising a hypothetical social media app. Has smooth scrolling when clicking nav links, scrollspy, forms, image and hover effects."}
          </p>
          <div className="buttons-row">
            <Button
              href="https://elmaester.github.io/css-loop-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/css-loop-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </ProjectShowcase>
        <ProjectShowcase>
          <img src="/images/projects/glozzom.png" />
          <h3>Glozzom</h3>
          <p>
            {ru
              ? "Сайт с несколькими страницами. Гипотетический провайдер программного обеспечения. Присутствует модальный поп-ап с видео, слайдер, форма."
              : "Multi-page site. A hypothetical provider of software services. Has modal video pop-up, a slider, a form."}
          </p>
          <div className="buttons-row">
            <Button
              href="https://elmaester.github.io/css-glozzom"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ru ? "Перейти" : "Go to"}
            </Button>
            <Button
              href="https://github.com/elmaester/css-glozzom"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </ProjectShowcase>
      </ProjectsContainer>
    </PageMain>
  );
};

export default PersonalProjects;
