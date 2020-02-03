import React, { useEffect } from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import Table from "../components/styled/Table";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Router from "next/router";

const HRFAQ = ({ lang }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  useBottomScrollListener(() => Router.push("/work-history"));
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>Some Answers to Frequently Asked Questions - Hire Oleg</title>
        <meta
          name="description"
          content="Try to find the answers you are looking for."
        />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Вопросы, интересующие HR" : "Questions HR people ask"}
      </PageTitle>
      <details>
        <summary>{ru ? "Базовая информация" : "Basic information"}</summary>
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
      </details>
      <details>
        <summary>
          {ru
            ? "Почему ты решил стать программистом?"
            : "Why have you decided to become a programmer?"}
        </summary>
        <p>
          {ru
            ? "Я всегда хотел быть программистом, но не имел в этом поддержки родителей, потому не получил соответствующего формального образования. Теперь время пришло, я обучился самостоятельно, и готов начать работать. Мне нравится решать задачи на логику, работать с вещами, которые подчиняются правилам, быть способным создать нечто ценное из ничего."
            : "I always wanted to, but have not had the support of my parents, so did not get the respective formal education. Now the time has come, I have studied on my own, and I am ready. I like solving logical problems, working with things which follow rules, being able to make something valuable out of nothing."}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "Что тебе нравилось на прошлой работе?"
            : "What have you enjoyed about your previous job?"}
        </summary>
        <p>
          {ru
            ? "Когда я работал фрилансером, мне нравились независимость от местонахождения, возможность работать из дому, нести всю полноту ответственности и обеспечивать получение моими клиентами желаемого результата. Нравилось быть полностью независимым и самодостаточным."
            : "As a freelancer, I liked location independence, being able to work from home, carrying the entire responsibility for delivering whatever my clients needed. Being fully independent and self-sufficient."}
        </p>
        <p>
          {ru
            ? "В роли учителя, мне нравилось постоянно сталкиваться в работе с новыми нюансами, быть уполномоченным вести за собой группы детей по пути изучения английского языка. Мне нравилось, когда нам удавалось и повеселиться, и выполнить запланированную работу."
            : "As a teacher, I liked being constantly challenged, being an authority figure tasked with leading groups of children on the journey of learning the English language. I liked it when we had fun and got the work done according to plan."}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "Почему ты ушёл с предыдущей работы? Что с ней было не так?"
            : "Why have you quit your previous job? What was wrong with it?"}
        </summary>
        <p>
          {ru
            ? "Когда я фрилансил, соотношение времени, затрачиваемого на поиск новой работы, к времени, затрачиваемому на выполнение работы, было неудовлетворительным. Предложение услуг, которые я предоставлял, превосходило спрос на них. Многие другие люди могли делать работу, которую делал я, пусть и менее качественно."
            : "When freelancing, the ratio of time spent searching for work to time spent doing work was unsatisfying. The supply of the services I provided exceeded demand. Many other people were able to do what I did, even if less well."}
        </p>
        <p>
          {ru
            ? "Когда я был учителем, меня часто расстраивали управленческая неэффективность и отсутствие достаточной поддержки от менеджмента в критических ситуациях. Та бизнес модель построена на постоянном притоке новых учителей на замену старым, которые выгорели. Текучка кадров крайне высока, потому что проблемы, берущие свой исток на уровне менеджмента, на уровне учителя остаётся лишь терпеть, а решить - не представляется возможным."
            : "When teaching, I was often frustrated by administrative inefficiency and lack of adequate managerial support in critical situations. The business model relies on constant flow of new teachers when the old ones burn out. The turnover rate is very high, because the problems created at management level can only be tolerated on the teacher level, but not solved."}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "Какая твоя лучшая черта характера?"
            : "What is your strongest quality?"}
        </summary>
        <p>
          {ru
            ? "Я ответственный работник. Мне очень важно выполнять данные мной обещания, и качественно делать работу."
            : "I am a responsible employee. To me it's very important to keep my promises and deliver quality work."}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "Какой твой наибольший недостаток?"
            : "What is your biggest weakness?"}
        </summary>
        <p>
          {ru
            ? `В ситуации экстремального напряжения, я иногда могу "сломаться" и почувствовать острую необходимость сделать перерыв, и вернуться к работе над проблемой позже. С опытом я научился лучше справляться со стрессом, и я уверен, что продолжу становиться крепче.`
            : "Under extreme pressure I can sometimes shut down and experience an intense need to take a break, and get back to working on the problem later. I got better at dealing with stress as I gained experience, and I am sure I will keep improving."}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "Что могло бы заставить тебя уволиться?"
            : "What would make you quit a job?"}
        </summary>
        <p>
          {ru
            ? "Враждебное отношение от коллег, недружелюбная среда. Эмоциональный комфорт важен для меня в долгосрочной перспективе. Я всегда буду стремиться к дружеским взаимоотношениям и взаимопониманию с моими коллегами. Если я буду отвергнут, или меня не будут ценить, я задумаюсь о смене места работы."
            : "Hostility from colleagues, unfriendly environment. Emotional comfort in the long run is important to me. I will always strive to have friendly interactions and find understanding with my colleagues. If I'm rejected or not appreciated, I will consider changing jobs."}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "Какой конкретно работой ты хотел бы заниматься?"
            : "What kind of work do you want to do?"}
        </summary>
        <p>
          {ru
            ? "Я хотел бы заниматься в основном разработкой динамических элементов front end'а. Построением интерфейсов из компонентов, управлением state'ом, использованием API, написанием кода для логической части. Вёрстка и работа со стилями - тоже норм, но в качестве вторичной сферы ответственности, а не основной."
            : "I would like to primarily focus on developing the dynamic parts of the front end. Build interfaces out of components, manage state, consume APIs, code the logic. Styling is fine too, but as a secondary responsibility, not primary."}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "С какими технологиями ты хочешь работать?"
            : "Which technologies do you want to work with?"}
        </summary>
        <p>
          {ru
            ? "React и его экосистема (Redux и т.д.), JavaScript везде, TypeScript, Next.js, Node.js"
            : "React and its ecosystem (Redux, etc), JavaScript everywhere, TypeScript, Next.js, Node.js"}
        </p>
      </details>
      <details>
        <summary>
          {ru
            ? "Какие для тебя 3 основных критерия при выборе места работы?"
            : "What are your 3 top priorities when choosing a job?"}
        </summary>
        <ol>
          <li>
            {ru
              ? "Профессиональный рост (накопление опыта работы с технологиями, которые меня интересуют)"
              : "Professional growth (gaining experience with the technologies I am interested in)"}
          </li>
          <li>{ru ? "Зарплата" : "Salary"}</li>
          <li>
            {ru
              ? "Эмоциональный комфорт / межличностная гармония"
              : "Emotional comfort / interpersonal harmony"}
          </li>
        </ol>
      </details>
      <details>
        <summary>
          {ru
            ? "Ты можешь прийти к нам в офис на собеседование?"
            : "Can you come to our office for an interview?"}
        </summary>
        <p>
          {ru
            ? "Поскольку в данный момент я проживаю далеко от вероятного места трудоустройства, то предпочёл бы обойтись без этого. В идеале я бы хотел, чтобы все необходимые этапы собеседования произошли удалённо, через интернет, по видео, если нужно. Я хотел бы получить предложение работы ПРЕЖДЕ, чем я перееду жить в новый город. В то же время, я понимаю желание и причины, по которым работодатель может настаивать на проведении собеседования с личным присутствием. Я могу предложить две возможности. Либо компания может оплатить мне дорогу и ночлег, чтобы мы могли провести собеседование, либо когда у меня накопится несколько запросов на собеседование в одном и том же городе, я поеду туда и пройду собеседования со всеми заинтересованными компаниями за один визит. Второй вариант может, по понятным причинам, занять больше времени."
            : "As I currently live far away from the likely places of employment, I would prefer not to. Ideally I would prefer for all the necessary interviews to happen remotely, over the internet, in videochat if necessary. I would like to have an offer BEFORE I relocate. However, I understand the desire and the reasoning behind requiring an in-person interview. So I can offer two possibilities. Either the company can pay my travel and lodging expenses to have an interview with me, or when I accumulate multiple interview requests from companies in the same city, I will travel there to have all interviews during one visit. The latter option can understandably take longer."}
        </p>
      </details>
      {/* <details>
        <summary>
          {ru
            ? "На какую зарплату ты рассчитываешь?"
            : "What are your salary expectations?"}
        </summary>
        <p>
          {ru
            ? "Ответ на этот вопрос зависит от города, в котором нужно работать. В Украине (Киев, Харьков) мне было бы комфортно в диапазоне $800-1000 чистыми (после налога). В случае удалённой работы, меня может устроить меньшая сумма."
            : "The answer to this question is location-dependent. In Ukraine (Kiev, Kharkov) I would be comfortable in the $800-1000 range after tax. To work remotely, a smaller amount would be acceptable. In other countries the numbers would need to be adjusted for the likely higher cost of living."}
        </p>
      </details> */}
      {ru ? null : (
        <details>
          <summary>Are you eligible to work in X country?</summary>
          <p>
            {`I am a citizen of Ukraine and Romania, so I'm eligible to work in any country of the European Economic Area (EAA), including the United Kingdom, Germany and so on.`}
          </p>
        </details>
      )}
      <details>
        <summary>
          {ru ? "Почему нам следует нанять тебя?" : "Why should we hire you?"}
        </summary>
        <ol>
          <li>
            {ru
              ? "Будучи junior разработчиком, я готов работать за меньшую сумму, чем middle или senior."
              : "As a junior developer, I charge less than a middle or senior developer."}
          </li>
          <li>
            {ru
              ? "Я готов к работе front-end web разработчиком настолько, насколько к ней может быть готов junior без коммерческого опыта."
              : "I am about as well prepared to do front-end web development work as a junior developer without commercial experience is ever going to be."}
          </li>
          <li>
            {ru
              ? "Я продемонстрировал инициативность и способность самостоятельно осваивать необходимые навыки, а с менторством и руководством всё может стать только лучше на будущей работе."
              : "I have demonstrated initiative and ability to independently learn the required skills, and with mentorship and guidance I can only do even better in the future when employed."}
          </li>
          <li>
            {ru
              ? "У меня приятный характер и сильная деловая этика. Это делает меня привлекательным кандидатом с межличностной точки зрения."
              : "I have a pleasant personality combined with a strong work ethic, making me an attractive candidate from an interpersonal point of view."}
          </li>
          <li>
            {ru
              ? "Я свободно говорю на английском, со всеми вытекающими из этого благами. Вместо того, чтобы потреблять ресурсы в виде оплачиваемого времени наёмного учителя, я могу ПРЕДОСТАВЛЯТЬ помощь и поддержку коллегам, мгновенно и не отходя от рабочего места, как только это понадобится."
              : "I speak English fluently, with all the benefits that result. Instead of consuming resources on English training, I can PROVIDE assistance and support to my colleagues instantly whenever required."}
          </li>
          <li>
            {ru
              ? "Вы заработаете больше денег на плодах моего труда, чем заплатите мне в качестве зарплаты. Иными словами, нанять меня - прибыльно."
              : "You will make more money from the work I will do for you, than you will pay me in salary. I.e. hiring me is profitable."}
          </li>
          <li>
            {ru
              ? "Я заинтересован в долгосрочной работе, в подходящей компании."
              : "I am interested in long-term employment with the right company."}
          </li>
        </ol>
      </details>
      <details>
        <summary>
          {ru
            ? "Как скоро ты смог бы начать работать?"
            : "How soon can you start?"}
        </summary>
        <p>
          {ru
            ? "В течение 2 недель с момента принятия предложения. Возможно и раньше. Я сам заинтересован начать как можно скорее."
            : "Within 2 weeks after accepting an offer. Perhaps sooner. I'd like to start ASAP myself."}
        </p>
      </details>
    </PageMain>
  );
};

export default HRFAQ;
