import React from "react";
import Link from "./Link";
import Nav from "../components/styled/Nav";
import colors from "../colors";

const Navigation = ({ lang, toggleLang }) => {
  let ru = lang === "ru";
  return (
    <Nav lang={lang}>
      <ul>
        <li>
          <Link href={`/`}>
            <a>{ru ? "Главная" : "Home"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/basic-info`}>
            <a>{ru ? "Факты" : "Basics"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/skills-and-tech`}>
            <a>{ru ? "Навыки" : "Skills"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/how-i-learned`}>
            <a>{ru ? "Обучение" : "Learning"}</a>
          </Link>
        </li>
        {/* <li>
          <Link href={`/personal-projects`}>
            <a>{ru ? "Тренировочные проекты" : "Personal Projects"}</a>
          </Link>
        </li> */}
        <li>
          <Link href={`/job-preferences`}>
            <a>{ru ? "Предпочтения" : "Preferences"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/hr-faq`}>
            <a>{ru ? "Вопросы" : "HR FAQ"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/work-history`}>
            <a>{ru ? "История" : "History"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/languages`}>
            <a>{ru ? "Языки" : "Languages"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/philosophy`}>
            <a>{ru ? "Философия" : "Philosophy"}</a>
          </Link>
        </li>
        <li>
          <Link href={`/hobbies`}>
            <a>{ru ? "Увлечения" : "Hobbies"}</a>
          </Link>
        </li>
        {/* <li>
          <Link href={`/this-site-made-with`}>
            <a>{ru ? "Этот сайт сделан при помощи" : "This Site Made With"}</a>
          </Link>
        </li> */}
        <li>
          <Link href={`/contacts`}>
            <a>{ru ? "Контакты" : "Contacts"}</a>
          </Link>
        </li>
        <li>
          <a onClick={toggleLang}>ENG/RUS</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
