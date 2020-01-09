import React from "react";
import PageTitle from "../components/styled/PageTitle";
import PageMain from "../components/styled/PageMain";
import Table from "../components/styled/Table";

const BasicInfo = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <PageTitle lang={lang}>
        {ru ? "Базовая информация" : "Basic information"}
      </PageTitle>
      <Table>
        <tbody>
          <tr className="darker-gray">
            <td>{ru ? "Имя, Фамилия" : "Name, Last Name"}</td>
            <td>{ru ? "Олег Клим" : "Oleg Klim"}</td>
          </tr>
          <tr className="light-gray">
            <td>{ru ? "Пол" : "Gender"}</td>
            <td>{ru ? "мужской" : "male"}</td>
          </tr>
          <tr className="darker-gray">
            <td>{ru ? "Дата рождения" : "Date of birth"}</td>
            <td>{ru ? "20. 12. 1990" : "12. 20. 1990"}</td>
          </tr>
          <tr className="light-gray">
            <td>{ru ? "Текущий возраст" : "Current age"}</td>
            <td>{ru ? "29 лет" : "29"}</td>
          </tr>
          <tr className="darker-gray">
            <td>{ru ? "Национальность" : "Nationality"}</td>
            <td>{ru ? "украинец" : "Ukrainian"}</td>
          </tr>
          <tr className="light-gray">
            <td>{ru ? "Основной язык" : "Citizenships"}</td>
            <td>{ru ? "русский" : "Ukraine, Romania (EEA)"}</td>
          </tr>
          <tr className="darker-gray">
            <td>{ru ? "Текущее местоположение" : "Current location"}</td>
            <td>{ru ? "западная Украина" : "Western Ukraine"}</td>
          </tr>
        </tbody>
      </Table>
    </PageMain>
  );
};

export default BasicInfo;
