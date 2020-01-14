import React from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import SubHeading from "../components/styled/SubHeading";

const ThisSite = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>Hire Oleg - How He Made This Site</title>
        <meta
          name="description"
          content="Learn about the process, the decision making, and the lessons learned while making this site."
        />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Как был сделан этот сайт" : "How This Site Was Made"}
      </PageTitle>
      <p>
        {ru
          ? "После моего первого знакомства с "
          : "Ever since my first encounter with "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        {ru
          ? " я заинтересовался им, и захотел опробовать, выполнив проект. Это он и есть, случай выдался подходящий. Я весьма доволен результатом. Благодаря server-side rendering и prefetching, переход между страницами невероятно быстр! Да и процесс разработки - одно удовольствие: возможность использовать всю силу React'а, при этом имея routing и SSR сразу из коробки. Это прекрасно :)"
          : " I was curious about it, and I wanted to try it out on a project. This is it, seemed like the perfect opportunity. I am really pleased with the result. With server-side rendering and prefetching, navigation between pages is so fast! The development process is a pleasure too, being able to use the full power of React, and have routing and SSR out of the box. It's awesome :)"}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Двуязычность" : "Bilinguality"}
      </SubHeading>
      <p>
        {ru
          ? "Поскольку я свободно владею и русским, и английским, то могу закинуть свои сети сразу в обе стороны. И я решил, что так и следует поступить, в рамках одного и того же сайта. Так даже лучше, потому что я могу продемонстрировать свою способность это реализовать, а также дать читателям возможность выбора."
          : "Because I am a fluent speaker of Russian and English, I am able to target both kinds of opportunities. So it made sense to do so, and on the very same site no less. It's even better this way, because I can demonstrate my ability to implement it, and give readers choice."}
      </p>
      <p>
        {ru ? "Сначала я нашёл " : "At first I found "}
        <a
          href="https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "эту статью" : "this article"}
        </a>
        {ru
          ? ", но мне не понравились предложенные там решения. Прочтение динамического параметра из адресной строки выполнялось с большой задержкой, которая была видна в виде вспышки контента на языке по умолчанию при загрузке каждой страницы. Послушав свой инстинкт React-разработчика, я пошёл другим путём и реализовал переключение языка через state в самом верхнем компоненте. Я предпочёл, чтобы URL был чистым и не содержал код языка. Это плохо для SEO, но в моём частном юзкейсе SEO не является приоритетом, поскольку я на него не буду полагаться для доставки сайта нужным адресатам."
          : ", but I didn't like either of the offered solutions. Reading a dynamic URL parameter was slow and resulted in a long flash of content in the default language on every page load. Instead I followed my React developer instinct and implemented language switching as state in the top level component. I preferred the URL to be clean and not contain the language code. That's bad for SEO, but in my particular use case SEO is not a priority, since I won't rely on it for the site to be discovered."}
      </p>
      <p>
        {ru
          ? "Преимущество выбранного мной способа в том, что переключение происходит мгновенно, без потери позиции на странице, или состояния приложения. К примеру: открыт или закрыт тег <details>. И Вы даже можете переключить язык во время просмотра видео на странице Увлечения. Те другие решения могли бы повторить тот же фокус? Не думаю."
          : "The benefit of doing it my way is that switching is instant, and can be done without losing position on the page, or the state of the app. Like whether or not a <details> tag is open or closed. And you can even switch the language while watching a video on the Hobbies page. Could the other solutions achieve that? I don't think so."}
      </p>
      <p>
        {ru
          ? "И это ещё не всё, мне также не понадобилось создавать множество JSON'а для хранения текстового контента сайта. Я могу просто инлайнить текст на обоих языках при помощи тернарного оператора, что очень удобно. Таким образом я сохраняю гибкость: могу использовать двуязычный функционал выборочно лишь там, где он мне нужен, и даже скрывать или показывать некоторые секции в зависимости от языка. Лично я своим выбором доволен."
          : "And on top of that, I don't need to make lots of JSON to keep the text content of the site in. I can just inline the text in both languages using a ternary operator, which is very convenient. This also gives me flexibility to use bilingual features only in those spots where I need them, and even conditionally display some sections or hide them entirely, depending on the language. Personally I am happy with my choice."}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Определение языка" : "Language Detection"}
      </SubHeading>
      <p>
        {ru
          ? "Когда компонент встраиваеся в DOM, этот сайт пытается прочесть параметр lang из local storage Вашего браузера. Данный параметр записывается туда всякий раз, когда Вы переключаете язык при помощи кнопки на панели навигации. Таким образом запоминается Ваше предпочтение. Конечно, при первом визите данного параметра ещё нет, и в этом случае приложение проверит значение navigator.language Вашего браузера, и попытается сделать из него соответствующий вывод. Ежели и это не удастся, по умолчанию будет выбран английский язык."
          : "When component mounts, this site attempts to read a lang property from your browser's local storage. That property is set every time you switch the language of the website with the button in the navbar. That way your language preference is saved between visits. Of course, on the first visit it will not exist, so in that case the app will check the navigator.language property of your browser and use that as a clue. Should that also fail, then English is the default."}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Форма обратной связи" : "Contact Form"}
      </SubHeading>
      <p>
        {ru ? "Я посмотрел " : "I watched a "}
        <a
          href="https://www.youtube.com/watch?v=IqSwjamlivQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "4-часовое видео" : "4+ hour long video"}
        </a>
        {ru
          ? " разбора различных портфолио, и одной настойчиво повторяющейся мыслью было то, что сайт-портфолио обязан иметь форму обратной связи. Я последовал инструкциям из "
          : " of portfolio reviews, and one important point that kept being repeated was how a portfolio site must have a contact form. I followed "}
        <a
          href="https://zeit.co/guides/deploying-nextjs-nodejs-and-sendgrid-with-zeit-now"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "этой статьи" : "this article"}
        </a>
        {ru
          ? " для изготовления моей формы, и она работает. Я доволен."
          : " to make mine, and it works. I'm happy."}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Собственноручный CSS" : "Custom CSS"}
      </SubHeading>
      <p>
        {ru
          ? "Весь CSS на этом сайте написан лично мной, (кроме "
          : "All CSS on this site was custom-written by me, (except the obligatory "}
        <a
          href="https://www.npmjs.com/package/styled-reset"
          target="_blank"
          rel="noopener noreferrer"
        >
          reset
        </a>
        {ru
          ? "-файла), никакой фреймворк не используется. Я перепробовал много вариантов, пока не нашёл правильный. Сначала я хотел использовать "
          : "), there's no framework. There was a lot of trial and error when choosing the right tool for the job. At first I wanted to use "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind
        </a>
        {ru
          ? ", и думал, что мне этот вариант понравится. Но очень скоро мне надоело присваивать кучу классов каждому тегу <p> и <a>, а директива @apply не работала в "
          : ", and I thought I would like it. But really soon I got tired of applying a bunch of classes to every <p> and <a> tag, and the @apply directive wouldn't work with "}
        <a
          href="https://github.com/zeit/styled-jsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          styled-jsx
        </a>
        {ru
          ? " - который встроен в Next.js из коробки."
          : ", which comes built-in with Next.js."}
      </p>
      <p>
        {ru
          ? "Затем я попробовал использовать лишь styled-jsx. Но проблемой было отсутствие поддержки SCSS из коробки. Я добился её при помощи плагинов, но моё рвение было уничтожено неработающим плагином VS Code с языковым сервером, который отвечает за автодополнение SCSS синтаксиса в styled-jsx. Он видимо заброшен и не поддерживается. Выдавал мне кучу ошибок без каких-либо понятных причин. Так что на данный момент styled-jsx является инструментом не вполне зрелым, его следует избегать."
          : "Then I tried using styled-jsx only. The problem was lack of support for SCSS out of the box. I did enable it with plugins, but what killed it for me was that the language server plugin for VS Code responsible for SCSS autocompletion in styled-jsx was broken and not maintained. Just threw a ton of errors at me for no apparent reason. So as of now, styled-jsx is not a mature enough solution and should be avoided."}
      </p>
      <p>
        {ru
          ? "В конце концов, я установил знакомые "
          : "Lastly, I installed the familiar "}
        <a
          href="https://www.styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          styled-components
        </a>
        {ru
          ? ", и очень доволен! Весь знакомый/нужный мне SCSS функционал работает сразу из коробки, scope ограничивается разрабатываемым компонентом, что позволяет избежать каких-либо накладок. И не нужно вообще придумывать названия классам, чем я крайне не люблю заниматься, потому что это субъективное занятие, не регулируемое ничем кроме договорённостей, что не надёжно. Так что styled-components - моя любимка. За что их не любить?"
          : ", and I am really happy! All the SCSS features I know/need are supported out of the box, the scope stays local to the component, avoiding any collisions. And it's not necessary to come up with any classnames at all, which I really hate doing because it's arbitrary and not enforced by anything but convention, which is weak. So styled-components is my fave. What's not to love?"}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Проблемы из-за SSR" : "SSR Troubles"}
      </SubHeading>
      <p>
        {ru
          ? "Однако, я столкнулся с некоторыми проблемами при использовании вместе Next.js и styled-components."
          : "I ran into some issues related to using Next.js together with styled-components though."}
      </p>
      <p>
        {ru
          ? `Сначала вылезла ошибка "className didn't match", и стили иногда просто не применялись, непредсказуемым образом. Прибегнув к могуществу Гугла, я нашёл `
          : `First, I got the "className didn't match" error and my styles would just randomly not apply. With the power of Google I found `}
        <a
          href="https://github.com/styled-components/babel-plugin-styled-components/issues/78#issuecomment-361160935"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "вот это решение" : "this solution"}
        </a>
        {ru
          ? ", применил его, и проблема исчезла."
          : ", applied it, and the issue was gone."}
      </p>
      <p>
        {ru
          ? "Но потом ещё осталась проблема FOUC (flash of unstyled content) при первой загрузке сайта. Снова загуглил, и "
          : "Then I still had a problem of FOUC (flash of unstyled content) on the first load of the site. Googled again, and "}
        <a
          href="https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "вот это" : "this"}
        </a>
        {ru ? " выручило." : " came to the rescue."}
      </p>
      <p>
        {ru
          ? "Решив эти проблемы, я снова был доволен."
          : "With those issues solved, I was happy again."}
      </p>
      <SubHeading lang={lang}>Responsiveness</SubHeading>
      <p>
        {ru
          ? "Раньше я делал responsive страницы лишь при помощи сторонних CSS фреймворков. В этот раз я захотел разобраться во всём на низовом уровне, научиться делать руками."
          : "In the past I only made pages responsive by using 3rd party CSS frameworks. This time I wanted to figure it out at the low level, how to do it by hand."}
      </p>
      <p>
        {ru
          ? "Первый возникший вопрос - breakpoint'ы. Какими должны быть их значения? Я нашёл "
          : "The first question was breakpoints. What should their values be? I found "}
        <a
          href="https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "эту статью" : "this article"}
        </a>
        {ru
          ? " и последовал её совету. Чтобы удобнее было писать @media queries, я создал файл variables.js в корне проекта, и экспортировал из него Object со значениями для всех breakpoint'ов в виде string. Импортировать и использовать их впоследствии было легко."
          : " and followed its advice. To make writing @media queries more convenient, I created a variables.js file at the root of the project, and exported an Object from it with the string values for all the breakpoints. It was easy to import and use afterwards."}
      </p>
      <p>
        {ru
          ? "А тогда я обнаружил, что ничего сложного или страшного нету в написании @media queries для решения конкретных проблем. Может я ещё какие-то проблемы здесь в будущем найду, но уже на данный момент responsiveness отлично на этом сайте работает, как мне кажется."
          : "Then I found there was nothing hard or intimidating about writing @media queries to solve specific issues. I might discover some more in the future, but for now I think responsiveness works quite well on this site."}
      </p>
      <p>
        {ru
          ? "Интересной задачей была панель навигации. Я реализовал её responsiveness при помощи булевой переменной в state, в зависимости от которой нужные элементы скрываются или показываются, и меняется flex-direction. Не знаю как эта задача решается обычно, но мне моё решение понравилось, я думаю оно прикольное, и доволен результатом."
          : "The interesting challenge was the navbar. I implemented its responsiveness with a boolean variable in the state, depending on which some elements are revealed or hidden, and the flex-direction changes. I don't know how it's usually done, but I like my solution, I think it's cool and am happy with the result."}
      </p>
      <SubHeading lang={lang}>
        {ru
          ? "Использование SVG и специальный стиль маркера для списков"
          : "Using SVGs and custom list style"}
      </SubHeading>
      <p>
        {ru
          ? "Я также познакомился с SVG во время работы над этим проектом, и это крутая штука. Они могут изменять свой размер произвольным образом, не теряя при этом чёткости. В некоторых из них мне пришлось удалить встроенные параметры высоты и ширины, чтобы задать им размер не по умолчанию. Тогда его становилось возможным регулировать при помощи CSS, и я был доволен. Чтобы стало возможным использовать SVG в Next.js/React, я выполнил некоторые из шагов, описанных в "
          : "I also got to know SVGs during my work on this project, and it's cool stuff. They scale to any size and don't lose their sharp look. For some of them I had to delete the preset height and width properties, to be able to change their size from the default. Then I could set it with CSS, and was happy. To enable SVG usage in Next.js/React, I followed some of the steps from "}
        <a
          href="https://medium.com/@rossbulat/working-with-svgs-in-react-d09d1602a219"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "этой статье" : "this article"}
        </a>
        .
      </p>
      <p>
        {ru
          ? "Иконка с бицепсом, которую Вы можете видеть рядом с элементами списков на некоторых страницах - это очевидно нестандартный стиль. Я нашёл её в Гугле, но понадобилось сделать прозрачным её фон. Я пользователь Linux, поэтому у меня есть GIMP, а Photoshop'а нет. "
          : "The muscle icon you see next to list items on some pages is obviously a custom touch. I found it by googling, but I also had to make its background transparent. I'm a Linux user, so I have GIMP, and don't have Photoshop. I used "}
        <a
          href="https://sirarsalih.com/2018/04/23/how-to-make-background-transparent-in-gimp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru ? "Эта статья" : "this article"}
        </a>
        {ru ? " помогла." : " to get the job done."}
      </p>
      <SubHeading lang={lang}>{ru ? "Заключение" : "Conclusion"}</SubHeading>
      <p>
        {ru
          ? "В целом я очень доволен тем, как получился данный сайт. Вот ссылка на "
          : "Overall, I am really happy with the way this site turned out. Here's the "}
        <a
          href="https://github.com/elmaester/hire-oleg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {ru
          ? ". Если заметите ещё какие-то изъяны, я буду благодарен, если Вы мне об этом скажете, воспользовавшись формой обратной связи. В общем Next.js крут, может в следующий раз я попробую "
          : " link. If you notice any flaws still remaining, I'd appreciate if you could let me know through that contact form. So Next.js is great, I might try "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        {ru ? "!" : " next time!"}
      </p>
    </PageMain>
  );
};

export default ThisSite;
