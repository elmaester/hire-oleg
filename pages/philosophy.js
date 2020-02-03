import React, { useEffect } from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import Highlight from "../components/styled/Highlight";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Router from "next/router";

const Philosophy = ({ lang }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  useBottomScrollListener(() => Router.push("/hobbies"));
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>What Are His Values - Hire Oleg</title>
        <meta
          name="description"
          content="Learn about Oleg's philosophical inclinations and values."
        />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Моя философия и ценности" : "My personal philosophy and values"}
      </PageTitle>
      <p>
        {ru
          ? `Философия не есть уделом исключительно профессиональных философов, она для всех. Все мы пытаемся оптимизировать наши жизни. Найти лучший способ жить, делать выбор и принимать решения. Для этого нам нужно иметь предпочтения и ценности. Вещи, наполняющие жизнь смыслом. Делающие мир понятным. Вот что для меня означает философия.`
          : `Philosophy is not only for professional philosophers, it's for everybody. We all try to optimize our lives, find the best way to live, the best way to make choices and decisions. For that we need to have preferences and values. Things that make life meaningful. To help the world make sense. That is what philosophy means to me.`}
      </p>
      <p>
        {ru
          ? `Поначалу, в подростковом возрасте, на меня оказали влияние книги Карлоса Кастанеды. "Путь воина" привлекал меня эстетически. Мне нравилась идея быть эффективным и крепким, способным выполнять поставленные задачи и преодолевать препятствия. Учение также включало в себя значительное количество мистических элементов, которые было весело исследовать некоторое время, благодаря им мои подростковые годы были интересными. Отдельно можно отметить практику осознанных сновидений.`
          : `Early on, in my teenage years, the writings of Carlos Castaneda were influential on me. The "way of the warrior" appealed to me aesthetically. I liked the idea of being efficient and resilient, capable of getting things done and persevering. The teaching also included a lot of mystical elements, which were fun to explore for a while, they made my teenage years interesting. Lucid dreaming in particular was exciting.`}
      </p>
      <p>
        {ru ? `Позже я открыл для себя ` : `Later I discovered `}
        <Highlight>{ru ? "стоицизм" : "stoicism"}</Highlight>
        {ru
          ? ` как более чистый вариант той же идеи, с меньшим числом примесей. Учение стоицизма затрагивает темы ясного восприятия, правильного действия, и сильной воли для выполнения действия вопреки затруднениям. Важно отличать, что находится в твоей сфере контроля, а что вне её. Второе нужно принять. А на первое нужно воздействовать, чётко и сосредоточенно. Трудности, неизбежно встречающиеся на нашем пути, нужно признавать, но не зацикливаться на них, и не использовать как позволение сдаться. Сдаваться никогда не следует.`
          : ` to be a purer version of the same idea. Stoicism is about clear perception, right action, and the will to carry the action through despite the obstacles. It's important to distinguish things within your control from things outside of it. The latter need to be accepted. The former need to be acted on, with clarity and focus. The hardships we all inevitably encounter are to be experienced, but not dwelt on, or used as excuses for giving up. Never give up.`}
      </p>
      <p>
        {ru
          ? `Недавним открытием для меня стала "индивидуальная психология" (описанная в книге "The Courage to be Disliked"). Она помогла мне принять некоторые стоические идеи, в которых я раньше сомневался, и найти смелость более откровенно показывать истинного себя, видеть в людях своих товарищей, а не скрытых врагов. Это стало очень позитивной переменой.`
          : `Lately I have found "individual psychology" (as described in "the Courage to be Disliked" book) to be really insightful. It helped me justify some stoic ideas I had doubted previously, and to find courage for sharing myself more honestly with my fellow human beings, to think of them as comrades rather than enemies. It's been a very positive shift.`}
      </p>
    </PageMain>
  );
};

export default Philosophy;
