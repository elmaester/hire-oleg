import React from "react";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";

const Home = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <PageTitle lang={lang}>
        {ru ? "Предложите мне работу" : "Hire me"}
      </PageTitle>
      <img
        src="/images/avatar-photo.jpg"
        alt="Oleg Klim"
        style={{ width: "40%", float: "left", marginRight: "0.5rem" }}
      />
      <p>
        {ru
          ? `Здравствуйте, и спасибо, что заглянули!`
          : `Hello and thank you for visiting!`}
      </p>
      <p>
        {ru
          ? `Меня зовут Олег, рад знакомству с Вами.`
          : `My name is Oleg, it's a pleasure to meet you.`}
      </p>
      <p>
        {ru
          ? `Этот сайт служит дополнением к моему резюме, предоставляет информацию потенциальным работодателям, и в то же время демонстрирует мои навыки веб-разработки. Я сделал его потому, что в данный момент ищу работу. Я считаю он может сэкономить нам немного времени на предварительном звонке, и даже на собеседовании.`
          : `The purpose of this site is to serve as extension to my resume, provide information to potential employers, while also demonstrating my web development skills. I made it because I am looking for a job at the moment. I believe it can save us some time on screening calls and even the actual interview.`}
      </p>
      <p>
        {ru
          ? `Пожалуйста, воспользуйтесь панелью навигации чтобы ознакомиться с любыми темами, которые Вас заинтересуют. Надеюсь, таким образом Вы найдёте повод, чтобы мы с Вами поговорили, и я жду этого с нетерпением!
`
          : `Please use the navbar to navigate, and explore any topics you find of interest. I hope you can find reasons for us to talk, and I look forward to it!`}
      </p>
      <div style={{ clear: "both" }} />
    </PageMain>
  );
};

export default Home;
