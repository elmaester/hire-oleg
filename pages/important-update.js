import React from "react";
import Head from "next/head";
import PageMain from "../components/styled/PageMain";
import PageTitle from "../components/styled/PageTitle";
import SubHeading from "../components/styled/SubHeading";
import { colors } from "../variables";

const ImportantUpdate = ({ lang }) => {
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>What has this site achieved - Hire Oleg</title>
        <meta
          name="description"
          content="Learn about the outcome of this site, i.e. what happened since it was published"
        />
        <meta property="og:title" content="What has this site achieved" />
        <meta
          property="og:description"
          content="Learn about the outcome of this site, i.e. what happened since it was published"
        />
        <meta
          property="og:url"
          content="https://hire-oleg.now.sh/important-update"
        />
      </Head>
      <PageTitle lang={lang}>
        {ru
          ? "Что случилось после публикации этого сайта"
          : "What has happened since I published this site"}
      </PageTitle>
      <p>
        <strong>TLDR: </strong>
        {ru
          ? "Классная американская ютуберша сделала обзор этого сайта, у меня умер винчестер в ноутбуке, я получил предложение работы, переехал в новый город, работаю уже две с половиной недели. Подробнее ниже."
          : "This website got reviewed by an awesome American youtuber, my hard drive failed, I got a job offer, I relocated, I've been working for 2.5 weeks now. More details below."}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Видео обзор от " : "Getting reviewed by "}
        <a
          href="https://www.youtube.com/channel/UC54NcJvLCvM2CNaBjd5j6HA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Real Tough Candy
        </a>
      </SubHeading>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: "0",
          backgroundColor: `${colors.darkGray}`,
          marginTop: "0.7rem"
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/YqRBis0eWcs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "block",
            zIndex: "1"
          }}
        ></iframe>
      </div>
      <p>
        {ru
          ? "Вот как это было. Я присоединился к "
          : "Here's how it happened. I joined  "}
        <a
          href="https://discord.gg/2F7mGE"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ru
            ? "сообществу Real Tough Candy в Discord"
            : "Real Tough Candy's Discord community"}
        </a>
        {ru
          ? " (если можете в английский, вступайте тоже), и попросил советов в разделе #review-my-portfolio. К моему удивлению, сама RTC спросила у меня разрешения сделать обзор на её канале. Разумеется, я тут же согласился, это был очевидный выбор. И она сделала что пообещала!"
          : " (and you should too), and asked for feedback in the #review-my-portfolio section. To my surprise, RTC herself asked me for permission to do a review on her channel. Naturally, I enthusiastically said yes, it was a no-brainer. And she delivered!"}
      </p>
      {ru ? null : (
        <p>
          I want to take this opporunity to express my gratitude. RTC, if you're
          reading this, THANKS! 😁
        </p>
      )}
      <p>
        {ru
          ? "Это видео определённо помогло мне в поиске работы. Самым заметным результатом было слегка иное отношение ко мне со стороны HR и рекрутеров, с которыми я беседовал впоследствии. Я отправлял им ссылку на видео с коротким объяснением в первом сообщении. Мне кажется, что они были впечатлены, и относились ко мне из-за этого с бóльшим интересом."
          : "It actually did help. The most noticeable outcome was a difference in attitude I observed from HR and recruiters I talked to afterwards. I included the link and some explanation in my initial message to them. I felt that they were impressed, and treated me with more interest because of it."}
      </p>
      <SubHeading lang={lang}>
        {ru ? "Винчестера смертны, посему " : "Hard drives are mortal, so "}
        memento mori
      </SubHeading>
      <p>
        {ru
          ? "Примерно в то же самое время произошло кое-что страшное. Мой ноутбук внезапно перестал загружаться. Можете представить, насколько это затруднило мне поиск работы и другие планы."
          : "At about that same time something scary had happened. I suddenly wasn't able to boot my laptop up. As you can imagine, it really threw a wrench into my plans and job-seeking activities. It's also the reason why I was so slow to publicly react to RTC's video review (sorry RTC)."}
      </p>
      <p>
        {ru
          ? "Я также боялся потери всех ценных персональных файлов, накопленных за годы. Я несколько недель прожил, не зная, смогу ли хоть что-то восстановить. Ждал чуда от экспертов, но они не смогли. Оставалось попытаться самому, и фух, к счастью получилось. Программа R-Linux сыграла ключевую роль."
          : "I was also scared of losing all of my precious personal data which I'd accumulated over the years. I lived several weeks in a state of not knowing whether or not I'd be able to recover any of it. Waited for the experts to perform a miracle, but they didn't. Then it was my turn to try, and whew, luckily I could. R-Linux was the software which saved the day."}
      </p>
      <p>
        {ru
          ? 'Под "memento mori" я имею в виду "делайте резервные копии". Винчестер приказал долго жить всего после 3 лет службы, так что я купил новый ему на замену. Он больше и шустрее, так что ура!'
          : 'By "memento mori" I mean "do backups". The hard drive physically failed after less than 3 years of service, so I bought a new one to replace it. It\'s larger and faster, so yay!'}
      </p>
      <SubHeading lang={lang}>
        {ru
          ? "Собеседования вопреки написанному выше"
          : "Interviewing despite the above"}
      </SubHeading>
      <p>
        {ru
          ? "Процессы были уже запущены, поэтому было необходимо продолжать, несмотря на отсутствие подобающего инструмента. По большей части я пользовался телефоном для поддержания переписки и проведения собеседований. Затем, когда мне нужно было выполнить тестовое задание, я попросил подругу о том, чтобы воспользоваться её компьютером."
          : "The processes had been set in motion, so I had to follow up despite the lack of proper means. I've largely used my phone to keep doing interview calls and manage correspondence. Then when I needed to do a coding task, I asked a friend to use her computer."}
      </p>
      <img
        src="/images/interview-dog.jpg"
        alt={ru ? "Это был я" : "This was me"}
        style={{
          margin: "0 auto",
          display: "block",
          maxWidth: "100%",
          marginTop: "1rem"
        }}
      />
      <p>
        {ru
          ? "Нашлась компания, которая согласилась выполнить все этапы собеседования удалённо, не требуя от меня явиться в их офис на другом конце страны. Теперь я работаю в этой компании."
          : "A company came along who agreed to do all of the assessments and interview steps remotely, without requiring me to come to their office on the other side of the country. I work for them now."}
      </p>
      <SubHeading lang={lang}>
        {ru
          ? "Переезд и начало новой жизни"
          : "Moving and getting started with the new life"}
      </SubHeading>
      <p>
        {ru
          ? "Переезд был непростой задачей. Упаковать в 3 сумки всё имущество, чтобы я мог сам всё нести, оставить позади знакомые места и людей, смириться с неизвестностью впереди. Выбрать наспех квартиру для вселения, купить всё необходимое и обжиться, выйти впервые на работу. Я всё это буду помнить, с улыбкой."
          : "Relocating was a big deal. Packing all of my worldly possessions into just 3 containers I could carry by myself, leaving the familiar places and people, embracing uncertainty. Choosing an apartment to live in in a hurry, settling in, going to work for the first time. I will remember all of this and smile when I do."}
      </p>
      <img
        src="/images/office-coding.jpg"
        alt={ru ? "На новом рабочем месте" : "At the new workplace"}
        style={{
          margin: "0 auto",
          display: "block",
          maxWidth: "100%",
          marginTop: "1rem"
        }}
      />
      <p>
        {ru
          ? "Пока что всё идёт очень хорошо, и на работе, и вне её. Я хорошо справляюсь с возлагаемыми на меня задачами, мне нравится новый город, я завожу новых друзей. Конечно, эти блага потенциально находятся под угрозой со стороны пандемии китайского коронавируса. Но и это пройдёт. Мы могучи и крепки, мы продолжим борьбу."
          : "So far it's been going really well, at work and otherwise. I've been quite successful at the tasks that were assigned to me, I'm enjoying the new city, meeting new friends. Of course, much of this goodness is threatened by the Chinese coronavirus pandemic. But this too shall pass. We are strong and resilient, we will persevere."}
      </p>
      <SubHeading lang={lang}>{ru ? "Вы можете" : "You can do it"}</SubHeading>
      <p>
        {ru
          ? "Найти первую работу, будучи джуниором без опыта, трудно. Без шуток, это действительно так. Ничего зазорного нет, если у вас пока что не получилось. Вернейший способ победить - попытаться ещё раз (рекурсивно, хаха). Так что не сдавайтесь. Оно того точно стоит."
          : "It's hard to get a job as a junior developer without prior experience. It actually is, there is nothing wrong with you if you're struggling. The surest way to succeed is to try one more time (recursively, haha). So keep at it. It totally is worth it."}
      </p>
      <p>
        {ru
          ? "Было приятно наконец указать вот это в"
          : "It felt good when I was finally able to do this in my"}{" "}
        LinkedIn:
      </p>
      <img
        src="/images/linkedin.png"
        alt={"LinkedIn"}
        style={{
          margin: "0 auto",
          display: "block",
          maxWidth: "100%",
          marginTop: "1rem"
        }}
      />
      <SubHeading lang={lang}>
        {ru ? "Что будет с этим сайтом" : "What happens to this site now"}
      </SubHeading>
      <p>
        {ru
          ? "Теперь это своего рода музей. Я думаю, что когда буду искать работу в следующий раз, то слишком много всего придётся обновить, так что можно вместо этого сделать новый сайт, ахах. Но этот - сохранится."
          : "It will be a sort of museum. I expect that the next time I am job seeking, too much would need to be updated, so I may as well make a new site, haha. But this will be preserved. I've made some of the tweaks RTC recommended, but I still have no clue what to do about styling for example 😁"}
      </p>
      <p>
        {ru
          ? "Подводя итог, я в ближайшем будущем не ищу новую работу, но буду рад новым связям со всеми, кому интересно. Загляните на страницу Контакты. Там и увидимся!"
          : "In summary, I am no longer job seeking for the foreseeable future, but I'll be happy to connect with anyone who would like to. Just hit the Contacts page. See you there!"}
      </p>
    </PageMain>
  );
};

export default ImportantUpdate;
