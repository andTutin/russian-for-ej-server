import { alphabet } from "../alphabet";
import { useSpeaker } from "../Speaker";

export const Alphabet = () => {
  const sayit = useSpeaker();

  return (
    <article onClick={sayit}>
      <header>
        <h2>Russian Alphabet</h2>
      </header>
      <div id="alphabet">
        {alphabet.map((l) => (
          <a href="/" key={l}>
            <i data-say={l}>{l.toUpperCase()}</i>
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
      <p>There is nothing else to say</p>
      <aside>
        <p>
          В, Е, Н, Р, С, У, Х. These letters look familiar but{" "}
          <i>sound different</i>
        </p>
      </aside>
      <ul>
        <li>
          В: like [v] - <b>V</b>enus, <b>V</b>ladimir *<b>RULE8</b>*
        </li>
        <li>
          Е: like [ye] - <b>Ye</b>ah (James Hetfield pretty good at this)
        </li>
        <li>
          Н: like [n] - <b>N</b>asa, <b>N</b>iel Armstrong
        </li>
        <li>
          Р: like [r] - <b>RRR</b>AAAAA-TATATA <b>RRR</b>AAAAA-TATATATA
        </li>
        <li>
          С: like [s] - <b>S</b>aturn 5, <b>S</b>tarship
        </li>
        <li>
          У: like [oo] - <b>Oo</b>ps
        </li>
        <li>
          Х: like [h, kh] - <b>H</b>op (wen?)
        </li>
      </ul>
      <aside>
        <p>
          Б, Г, Д, З, И, Й, Л, П, Ф, Э, Ю, Я. These letters sounds familiar but{" "}
          <i>look different</i>
        </p>
      </aside>
      <ul>
        <li>
          Б: like [b] - <b>B</b>uran, <b>B</b>remo
        </li>
        <li>
          Г: like [g] - <b>G</b>lenn, <b>G</b>igafactory
        </li>
        <li>
          Д: like [d] - <b>D</b>iscovery, <b>D</b>ocking
        </li>
        <li>
          З: like [z] - <b>Z</b>vezda
        </li>
        <li>
          И: like [e] - <b>Ea</b>gle (has landed)
        </li>
        <li>
          Й: like [y] - Deplo<b>y</b>
        </li>
        <li>
          Л: like [l] - <b>L</b>aunch
        </li>
        <li>
          П: like [p] - <b>P</b>erceverance, <b>P</b>yMbIH
        </li>
        <li>
          Ф: like [f] - <b>F</b>alcon 9, <b>F</b>errari
        </li>
        <li>
          Э: like [a] - <b>E</b>ndeavour
        </li>
        <li>
          Ю: like [u, you] - so<b>You</b>z
        </li>
        <li>
          Я: like [ya] - <b>YAAA</b> MAAAAAAN!!!
        </li>
      </ul>
      <aside>
        <p>
          Ё, Ж, Ц, Ч, Щ, Ш, Ы. Cold winters and these letters. God loves
          russians
        </p>
      </aside>
      <ul>
        <li>
          Ё: like [yo] - what a <b>yo</b>ke
        </li>
        <li>Ж: like [zh?] - looks like bug sound like bug</li>
        <li>
          Ц: like [ts or tz] - USS Nimi<b>tz</b>, <b>Ts</b>iolkovsky, i
          <b>t's</b>
        </li>
        <li>
          Ч: like [ch] - <b>Ch</b>allenger
        </li>
        <li>
          Щ: like [sh] - <b>Sh</b>uttle, <b>Sh</b>ip
        </li>
        <li>
          Ш: its like Щ but hard. move tongue back when you say <b>Щ</b>
        </li>
        <li>
          Ы: its like И but hard. move tongue back when you say <b>И</b>
        </li>
      </ul>
      <aside>
        <p>Ъ, Ь. Have no sound</p>
      </aside>
      <ul>
        <li>Hard sign and soft sign.</li>
        <li>Ь (soft sign) make previuos consonant letter soft</li>
        listen this
        <div data-say="кон">кон</div>
        <div data-say="конь">конь</div>
        <li>
          Both often used as sound devider. like they want you not to connect
          letters that it devides.{" "}
        </li>
        listen this
        <div data-say="семя">семя</div>
        <div data-say="семья">семья</div>
      </ul>
    </article>
  );
};
