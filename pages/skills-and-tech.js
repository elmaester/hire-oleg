import React, { useEffect } from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Router from "next/router";

const SkillsAndTech = ({ lang }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  useBottomScrollListener(() => Router.push("/how-i-learned"));
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>Which Tools Can He Use - Hire Oleg</title>
        <meta
          name="description"
          content="Learn about Oleg's skills and favorite technologies."
        />
        <meta property="og:title" content="Which Tools Can He Use" />
        <meta
          property="og:description"
          content="Learn about Oleg's skills and favorite technologies."
        />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Навыки и любимые технологии" : "Skills and tech choices"}
      </PageTitle>
      <details>
        <summary>HTML 5</summary>
        <p>
          {ru
            ? "Я знаю и использую новые семантические теги."
            : "I know and use the new semantic tags."}
        </p>
      </details>
      <details>
        <summary>CSS 3</summary>
        <p>
          {ru
            ? "Достойный уровень. Я понимаю блоковую модель, селекторы, их вес. Я знаком и имею опыт использования псевдоэлементов. Я помню довольно много атрибутов на память. Я работал с FlexBox. У меня даже есть немного опыта с CSS анимациями. SCSS - препроцессор, которым я пользовался."
            : "Solid proficiency. I understand the block model, selectors, their weights. I'm familiar with and have used pseudo-elements. I remember a decent number of attributes by heart. I've worked with FlexBox. I even have some experience with CSS animations. SCSS is the preprocessor I have used."}
        </p>
      </details>
      <details>
        <summary>
          CSS {ru ? "фреймворки и решения" : "Frameworks and Solutions"}
        </summary>
        <p>
          {ru
            ? "Мне очень нравится CSS в JS, и в частности "
            : "I'm a big fan of CSS in JS, and "}
          <a
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>
          {ru
            ? ". У меня есть опыт с Bootstrap, а также с более утилитными библиотеками - "
            : " in particular. I have experience with Bootstrap, and also the utility-first libraries, e.g. "}
          <a
            href="https://tachyons.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tachyons
          </a>
          {ru ? " и " : " and "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind
          </a>
          .
        </p>
      </details>
      <details>
        <summary>JavaScript ES6+</summary>
        <p>
          {ru
            ? `Я близко знаком с синтаксисом и некоторыми особенностями JS, и с тем, что происходит у него "под капотом". Я использую ES6 и соответствующие решения в работе, мой код выглядит свежо и современно. Я могу решить большинство задач среднего уровня. Я упражняюсь на LeetCode и подобных сайтах. Я знаю встроенные структуры данных и их методы. Мне нравится функциональный стиль программирования больше, чем ООП, хотя я не против ближе познакомиться и с последним.`
            : "I'm well familiar with the syntax and some of JS' quirks, the way it works under the hood. I use the ES6 way of doing things, my code looks fresh and modern. I can solve most intermediate problems. I practice on LeetCode and similar sites. I know the built-in data structures and their methods. I like functional programming style more than OOP, though I don't mind learning more about the latter too."}
        </p>
      </details>
      <details>
        <summary>TypeScript</summary>
        <p>
          {ru
            ? "Базовое владение. Я пользовался им, я понимаю для чего он нужен, я умею писать явно заданные аннотации типов. Пока что не изучал продвинутые ООП фичи."
            : "Basic proficiency. I've used it, I understand what it does, I can write explicit type annotations. Haven't learned the advanced OOP features yet."}
        </p>
      </details>
      <details>
        <summary>React</summary>
        <p>
          {ru
            ? "Это фреймворк, который я сознательно выбрал. Я не заинтересован в изучении Vue или Angular. Я считаю React самым важным компонентом в моём стэке, и в его изучение я вложил наибольше усилий. Его я также больше всего хочу использовать на работе, получать с ним опыт и узнавать глубже. Мне нравится использовать хуки и функциональные, а не классовые, компоненты."
            : "Is my JS framework of choice. I am not interested in learning either Vue or Angular. I consider React the most important piece of my tech stack, and the one I've invested the most effort in learning. It is also the one I am most eager to use at work, practice and learn more deeply. I really like using Hooks and functional, as opposed to class, components."}
        </p>
      </details>
      <details>
        <summary>Redux</summary>
        <p>
          {ru
            ? "Я выполнил один большой проект, где были использованы Redux, Thunk и Saga. С некоторым усилием я смог понять всё происходящее, так что я могу обсудить эту тему и объяснить своё понимание. Мне нужно ещё немного практики, и тогда я закреплю знания и смогу с уверенностью с ними работать."
            : "I have done one big project where I've used Redux, Thunk and Sagas. With some effort I understood it all, so I could talk about it and explain it. I need some more opportunities to practice in order to use them with confidence."}
        </p>
      </details>
      <details>
        <summary>Elm</summary>
        <p>
          {ru
            ? "Я изучил его с целью ознакомления с функциональным стилем программирования. Мне весьма понравилось. Я выполнил один практический проект на Elm, и записал о нём видео. После этого я учил React, поэтому знание Elm'а у меня не совсем свежее, немного подзабыто. Но в случае надобности я мог бы повторить и быстро освежить навыки."
            : "I learned it in order to become more familiar with the functional style of programming. I think it is really nice. I've done one practice project in Elm and made a video about it. I've learned React afterwards, so the knowledge of Elm is not fresh in my mind, but I could review and brush up my skills quickly if needed."}
        </p>
      </details>
      <details>
        <summary>Git</summary>
        <p>
          {ru
            ? "Я активный пользователь на GitHub. Я очень хорошо знаком с операциями commit и push в ветку master. Я предвкушаю командную работу, и вытекающую из этого возможность попрактиковать использование и других git команд (они мне уже известны)."
            : "I am an active GitHub user. I'm very familiar with committing and pushing to the master branch. I look forward to working collaboratively with a team, which would offer an opportunity to practice the other commands (which I know about) as well."}
        </p>
      </details>
      <details>
        <summary>npm</summary>
        <p>
          {ru
            ? "Я хорошо знаком с npm, я знаю как устанавливать и удалять пакеты, локально и глобально, просматривать установленные пакеты с опциональным параметром глубины, указывать точную версию устанавливаемого пакета, и т.д. Я также умею искать пакеты на сайте npm и читать их документацию."
            : "I am really familiar with npm, I know how to install and remove packages, locally and globally, view installed packages with an optional depth parameter, specify versions to install, etc. I can also search for packages on the npm website and read their documentation."}
        </p>
      </details>
      <details>
        <summary>Linux</summary>
        <p>
          {ru
            ? "Я эксклюзивный пользователь Linux, на моём компьютере не используется никакая другая операционная система. Выбранный мною дистрибутив - Manjaro. Я использую плиточный менеджер окон и предпочитаю приложения в терминале графическим, когда имеется для этого разумная возможность."
            : "I am a full-time Linux user, I use no other operating system on my computer. My distribution of choice is Manjaro. I use a tiling window manager, and I prefer terminal applications to ones with GUI whenever feasible."}
        </p>
      </details>
      <details>
        <summary>(Neo)vim, VS Code</summary>
        <p>
          {ru
            ? "Мне очень нравится редактировать код в vim-стиле. Я знаю и использую значительное количество клавиатурных команд для быстрого и экономного редактирования. В VS Code я использую плагин vim."
            : "I really like editing code vim-style. I know and use a significant variety of keyboard shortcuts to make fast and efficient edits. In VS Code I use the vim plugin."}
        </p>
      </details>
      <details>
        <summary>Node.js</summary>
        <p>
          {ru
            ? "Изучаю его сейчас, мне очень интересно. Ещё не готов использовать его в работе, но в будущем - обязательно."
            : "Currently learning, I find it really interesting. Not ready to use at work yet, but in the future definitely."}
        </p>
      </details>
    </PageMain>
  );
};

export default SkillsAndTech;
