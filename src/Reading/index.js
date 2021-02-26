import { vowels, consonants } from "../alphabet";
import { useSpeaker } from "../Speaker";

export const Reading = () => {
  const sayit = useSpeaker();

  return (
    <article>
      <header>
        <h2>This is a Syllables table</h2>
      </header>
      <p>
        Reading russian is kinda WYSIWYG, letter = sound (if it has), we just
        pronunce sounds one after another, with some exeptions, but it's not
        like french.
      </p>
      <p>This is a consonant + vowel letter combinations table</p>
      <table onClick={sayit}>
        <thead>
          <tr>
            <th></th>
            {consonants.map((l) => (
              <th key={l} data-say={l}>
                {l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vowels.map((v) => (
            <tr key={v}>
              <th data-say={v}>{v}</th>
              {consonants.map((c) => (
                <th key={c} data-say={c + v}>
                  {c + v}
                </th>
              ))}
            </tr>
          ))}
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
            connect single letters (sometimes it more than one? but its not a
            problem) and combos
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
  );
};
