import russian from "./russian.png";
import _for from "./for.png";
import ej from "./ej.png";
import { alphabet } from "./alphabet";

function App() {
  return (
    <>
      {/*header*/}
      <header>
        <nav>
          <div>
            <img alt="Russian" src={russian} height="30" />
            <img alt="for" src={_for} height="30" />
            <img alt="EJ" src={ej} height="30" />
          </div>

          <ul>
            <li>Alphabet</li>
            <li>How to read</li>
            <li>Phrasebook</li>
          </ul>
        </nav>
        <h1>hullo</h1>
      </header>
      <main>
        {/*about*/}
        <section>
          <aside>
            <blockquote>
              "We choose to teach EJ russian in this decade not because it's
              easy, but because it's hard"
              <footer> - Few russians in CHET.</footer>
            </blockquote>
          </aside>
          <aside>
            <blockquote>
              "...and do the other things"
              <footer> - Same guys.</footer>
            </blockquote>
            <blockquote>
              "What a hell?"
              <footer> - John F. Kennedy.</footer>
            </blockquote>
          </aside>
          <h1>
            <br />
            <br />
            The goal of this page is to make EJ understand space news from Russia with
            little or without translator help at all. It uses WebSpeech API,
            which is experimental and works norminal only in Google Chrome. But its free,
            so ...
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </h1>
        </section>
        {/*alphabet*/}
        <article>
          <header>
            <h2>Russian Alphabet</h2>
          </header>
          <p>
            There are 33 letters in our alphabet!
            <img
              alt="wut"
              src="https://static-cdn.jtvnw.net/emoticons/v2/28087/default/light/1.0"
            />
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {alphabet.map((l) => (
              <a href="/" data-letter={l} key={l}>
                <i>{l.toUpperCase()}</i>
              </a>
            ))}
          </div>
        </article>
        {/*Syllable table */}
      
      </main>
    </>
  );
}

export default App;
