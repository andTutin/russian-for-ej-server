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
            The goal of this page is to make EJ understand space news from
            Russia with little or without translator help at all. It uses
            WebSpeech API, which is experimental and works norminal only in
            Google Chrome. But its free, so ...
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
          <aside>
            <p>
              А, К, М, О, Т. These letters look and sound basically the same
            </p>
          </aside>
          <ul>
            <li>А</li>
            <li>К</li>
            <li>М</li>
            <li>О</li>
            <li>Т</li>
          </ul>
          <aside>
            <p>
              В, Е, Н, Р, С, У, Х. These letters look familiar but
              <i>sound different</i>
            </p>
          </aside>
          <ul>
            <li>В</li>
            <li>Е</li>
            <li>Н</li>
            <li>Р</li>
            <li>С</li>
            <li>У</li>
            <li>Х</li>
          </ul>
          <aside>
            <p>
              Б, Г, Д, Ё, З, И, Й, Л, П, Ф, Э, Ю, Я. These letters sounds
              familiar but <i>look different</i>
            </p>
          </aside>
          <ul>
            <li>Б</li>
            <li>Г</li>
            <li>Д</li>
            <li>Ё</li>
            <li>З</li>
            <li>И</li>
            <li>Й</li>
            <li>Л</li>
            <li>П</li>
            <li>Ф</li>
            <li>Э</li>
            <li>Ю</li>
            <li>Я</li>
          </ul>
          <aside>
            <p>
              Ж, Ц, Ч, Ш, Щ, Ы. Cold winters and these letters. God loves
              russians
            </p>
          </aside>
          <ul>
            <li>Ж</li>
            <li>Ц</li>
            <li>Ч</li>
            <li>Ш</li>
            <li>Щ</li>
            <li>Ы</li>
          </ul>
          <aside>
            <p>Ъ, Ь. Have no sound</p>
          </aside>
          <ul>
            <li>Hard sign and soft sigh. Sound dividers</li>
          </ul>
        </article>
        {/*Syllable table */}
        <article>
          <header>
            <h2>This is a Syllables table</h2>
          </header>
          <p>
            Reading russian is kinda WYSIWYG, letter = sound (if it has), we
            just pronunce sounds one after another, with some exeptions, but
            it's not like french.
          </p>
          <p>This is a consonant + vowel letter combinations table</p>
          <table>
            <thead>
              <tr>
                <th></th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase()}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>а</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "a"}</th>
                  ))}
              </tr>
              <tr>
                <th>е</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "е"}</th>
                  ))}
              </tr>
              <tr>
                <th>ё</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "ё"}</th>
                  ))}
              </tr>
              <tr>
                <th>и</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "и"}</th>
                  ))}
              </tr>
              <tr>
                <th>о</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "о"}</th>
                  ))}
              </tr>
              <tr>
                <th>у</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "у"}</th>
                  ))}
              </tr>
              <tr>
                <th>ы</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "ы"}</th>
                  ))}
              </tr>
              <tr>
                <th>э</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "э"}</th>
                  ))}
              </tr>
              <tr>
                <th>ю</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "ю"}</th>
                  ))}
              </tr>
              <tr>
                <th>я</th>
                {alphabet
                  .filter(
                    (l) =>
                      ![
                        "а",
                        "е",
                        "ё",
                        "и",
                        "о",
                        "у",
                        "ъ",
                        "ы",
                        "ь",
                        "э",
                        "ю",
                        "я",
                      ].includes(l)
                  )
                  .map((l) => (
                    <th key={l}>{l.toUpperCase() + "я"}</th>
                  ))}
              </tr>
            </tbody>
          </table>
          <p>
            There are probably combos that don't exist, but there was a loop in
            script, and i am too lazy to handle exceptions
          </p>
          <p>
            So you take the word, split in on syllables, read single letters and
            these combos
          </p>
          <aside>
            <p>for example lets read word 'Вдохновение' (inspiration)</p>
            <ul>
              <li>syllables вдо-хно-ве-ни-е</li>
              <li>then в[до]-х[но]-[ве]-[ни]- е</li>
              <li>[] means it exist in table, find it and press to listen</li>
              <li>
                connect single letters (sometimes it more than one? but its not
                a problem) and combos
              </li>
              <li>result v[do] - kh[no] - [ve] - [nee] - ye</li>
              <li>
                i dont really know why i am doing this, 146% sure you know how
                reading works
              </li>
            </ul>
          </aside>
          <p>But if it works differently here is word splitter</p>
          <form>
            <input
              type="text"
              id="word"
              name="word"
              size="20"
              placeholder="split the word"
            />
            <button type="submit">syllabify</button>
          </form>
        </article>
      </main>
    </>
  );
}

export default App;
