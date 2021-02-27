import { Quote } from "./Quote";

export const About = () => {
  return (
    <section>
      <header>
        <h1>hullo</h1>
      </header>
      <aside>
        <Quote
          speech="We choose to teach EJ russian in this decade not because it's easy,
          but because it's hard"
          speaker="Few russians in CHET"
        />
      </aside>
      <aside>
        <Quote speech="...and do the other things" speaker="Same guys" />
        <Quote speech="What a hell?" speaker="John F. Kennedy" />
      </aside>
      <h1>
        <br />
        <br />
        The goal of this page is to teach EJ some russian: read first,
        understand space news from Russia later. It uses WebSpeech API, which is
        experimental and works norminal-ish only in Google Chrome. But its free,
        so ...
        <br />
        <br />
      </h1>
    </section>
  );
};
