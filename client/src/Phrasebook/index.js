import { useState } from "react";
import { useSpeaker } from "../Speaker";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Phrasebook = () => {
  const sayit = useSpeaker();
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("api/category", {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });
        const data = await res.json();
        setCategories(data);
        setActiveCategory(data[0].title);
      } catch (error) {}
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getWords = async (activeCategory) => {
      if (!activeCategory) return
      
      try {
        const res = await fetch("api/word", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ category: activeCategory }),
        });
        const data = await res.json();
        console.log(data);
        setWords(data);
      } catch (error) {}
    };

    getWords(activeCategory);
  }, [activeCategory]);

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
      <br />
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: "1" }}>
          {categories.map((c) => (
            <article key={c._id}>
              <aside>
                <p>{c.title}</p>
              </aside>
              <br />
            </article>
          ))}
        </div>
        <div style={{ flex: "3" }} onClick={sayit}>
          <ul>
            {words.map((w) => (
              <li key={w._id}>
                {w.english} - <span data-say={w.russian}>{w.russian}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
