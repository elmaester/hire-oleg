import React, { useState } from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { colors, sizes } from "../variables";
import MenuIcon from "../public/images/app-icons/menu.svg";
import UpArrowIcon from "../public/images/app-icons/up-arrow.svg";

const Nav = styled.nav`
  background-color: ${colors.darkGray};
  border-bottom: 2px solid ${colors.darkBlue};
  position: sticky;
  top: 0;
  font-family: "Exo 2", sans-serif;
  z-index: 2;

  ul {
    display: flex;
    list-style: none;
    flex-direction: ${props => (props.menuExpanded ? "column" : "row")};
    justify-content: space-evenly;
    align-items: center;
    @media ${sizes.desktop} {
      justify-content: space-around;
      flex-direction: row;
    }
    li {
      display: ${props => (props.menuExpanded ? "list-item" : "none")};
      @media ${sizes.desktop} {
        display: list-item;
      }
      &.lang-selector-link {
        display: ${props => (props.menuExpanded ? "none" : "list-item")};
      }
      &.active-page-link {
        display: list-item;
      }
      &.active-page-link a {
        color: ${colors.yellow};
        font-weight: 600;
        pointer-events: none;
        @media ${sizes.desktop} {
          pointer-events: auto;
        }
      }
    }
  }

  #menu-icon {
    display: ${props => (props.menuExpanded ? "none" : "inline")};
    @media ${sizes.desktop} {
      display: none;
    }
  }
  #up-arrow-icon {
    display: ${props => (props.menuExpanded ? "inline" : "none")};
    @media ${sizes.desktop} {
      display: none;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: 400;
    transition: 0.25s ease;
    line-height: 2rem;
    &:hover {
      color: ${colors.yellow};
    }
  }
  .eng {
    color: ${props => (props.lang === "en" ? colors.yellow : "white")};
    font-weight: ${props => (props.lang === "en" ? "600" : "400")};
  }
  .rus {
    color: ${props => (props.lang === "ru" ? colors.yellow : "white")};
    font-weight: ${props => (props.lang === "ru" ? "600" : "400")};
  }
`;

const Navigation = ({ lang, toggleLang }) => {
  let ru = lang === "ru";
  let [menuExpanded, setMenuExpanded] = useState(false);
  const expandMenu = () => setMenuExpanded(!menuExpanded);
  return (
    <Nav lang={lang} menuExpanded={menuExpanded}>
      <ul>
        <NavLink href={`/`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Главная" : "Home"}
          </a>
        </NavLink>
        <NavLink href={`/skills-and-tech`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Навыки" : "Skills"}
          </a>
        </NavLink>
        <NavLink href={`/how-i-learned`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Обучение" : "Learning"}
          </a>
        </NavLink>
        <NavLink href={``}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Проекты" : "Projects"}
          </a>
        </NavLink>
        <NavLink href={`/job-preferences`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Предпочтения" : "Preferences"}
          </a>
        </NavLink>
        <NavLink href={`/hr-faq`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Вопросы" : "HR FAQ"}
          </a>
        </NavLink>
        <NavLink href={`/work-history`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "История" : "History"}
          </a>
        </NavLink>
        <NavLink href={`/languages`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Языки" : "Languages"}
          </a>
        </NavLink>
        <NavLink href={`/philosophy`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Философия" : "Philosophy"}
          </a>
        </NavLink>
        <NavLink href={`/hobbies`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Увлечения" : "Hobbies"}
          </a>
        </NavLink>
        <NavLink href={``}>
          <a onClick={() => setMenuExpanded(false)}>{ru ? "Это" : "This"}</a>
        </NavLink>
        <NavLink href={`/contacts`}>
          <a onClick={() => setMenuExpanded(false)}>
            {ru ? "Контакты" : "Contacts"}
          </a>
        </NavLink>
        <MenuIcon id="menu-icon" onClick={() => expandMenu()} />
        <li className="lang-selector-link">
          <a onClick={toggleLang}>
            <span className="eng">ENG</span>/<span className="rus">RUS</span>
          </a>
        </li>
        <UpArrowIcon id="up-arrow-icon" onClick={() => expandMenu()} />
      </ul>
    </Nav>
  );
};

export default Navigation;
