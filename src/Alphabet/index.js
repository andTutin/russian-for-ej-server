import { alphabet } from "../alphabet";

export const Alphabet = () => {
  return (
    <article>
      <header>
        <h2>Russian Alphabet</h2>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {alphabet.map((l) => (
          <a href="/" data-say={l} key={l}>
            <i>{l.toUpperCase()}</i>
          </a>
        ))}
      </div>
      <header>
        <h2>
          <img
            alt="wut"
            src="https://static-cdn.jtvnw.net/emoticons/v2/28087/default/light/1.0"
          />
        </h2>
      </header>
      <aside>
        <p>А, К, М, О, Т. These letters look and sound basically the same</p>
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
          В, Е, Н, Р, С, У, Х. These letters look familiar but{" "}
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
          Б, Г, Д, Ё, З, И, Й, Л, П, Ф, Э, Ю, Я. These letters sounds familiar
          but <i>look different</i>
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
          Ж, Ц, Ч, Ш, Щ, Ы. Cold winters and these letters. God loves russians
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
  );
};
