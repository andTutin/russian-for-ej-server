import { useSpeaker } from "../Speaker";
import { Link } from "react-router-dom";

export const Phrasebook = () => {
  const sayit = useSpeaker();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <select id="snort" style={{ margin: "0" }} defaultValue="">
          <option value="" disabled>
            Snort By:
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
        </select>

        <input
          type="text"
          placeholder="word to search"
          style={{ margin: "0" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Link to="/add">
            <button type="button">add word</button>
          </Link>
        </div>
      </div>
      <article onClick={sayit}>
        <aside>
          <p>Directions</p>
        </aside>
        <ul>
          <li>
            North - <span data-say="Север">Север</span>
          </li>
          <li>
            South - <span data-say="Юг">Юг</span>
          </li>
          <li>
            West - <span data-say="Запад">Запад</span>
          </li>
          <li>
            East - <span data-say="Восток">Восток</span>
          </li>
          ...
        </ul>
        <br />
        <aside>
          <p>Places</p>
        </aside>
        <ul>
          <li>
            Space center - <span data-say="Космодром">Космодром</span>
          </li>
          <li>
            Launch Pad - <span data-say="Стартовый стол">Стартовый стол</span>
          </li>
          ...
        </ul>
        <br />
        <aside>
          <p>Events</p>
        </aside>
        <ul>
          <li>
            Launch - <span data-say="Запуск">Запуск</span>
          </li>
          <li>
            Docking - <span data-say="Стыковка">Стыковка</span>
          </li>
          ...
        </ul>
        <br />
        <aside>
          <p>Rocket parts</p>
        </aside>
        <ul>
          <li>
            Engine - <span data-say="Двигатель">Двигатель</span>
          </li>
          <li>
            Stage - <span data-say="Ступень">Ступень</span>
          </li>
          ...
        </ul>
        <br />
        <aside>
          <p>...</p>
        </aside>
      </article>
    </>
  );
};
