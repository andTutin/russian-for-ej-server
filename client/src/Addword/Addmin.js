import { useEffect, useState } from "react";

export const Addmin = () => {
  const [category, setCategory] = useState("");
  const [word, setWord] = useState({
    english: "",
    russian: "",
    category: "",
  });

  const [categories, setCategories]= useState([]);

  const testCatRequest = async () => {
    try {
      const res = await fetch("api/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const resp = await res.json()
      console.log(resp);
      setCategories(resp)
    } catch (error) {}
  };

  useEffect(() => {
    testCatRequest();
  }, [])

  const changeCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const changeWordHandler = (e) => {
    setWord({
      ...word,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/category/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ category }),
      });
      console.log(res);
      testCatRequest()
    } catch (error) {}
  };

  const handleWordSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/word/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(word),
      });
      console.log(res);
    } catch (error) {}
  };

  return (
    <>
      <form
        onSubmit={handleCategorySubmit}
        style={{
          width: "min-content",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="новая категория"
          style={{ margin: "0" }}
          name="newcategory"
          id="newcategory"
          onChange={changeCategoryHandler}
        />
        <button type="submit" style={{ margin: "0 0 0 10px" }}>
          добавить
        </button>
      </form>
      <br />
      <form onSubmit={handleWordSubmit}
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="новое слово англ"
          name="english"
          id="english"
          style={{ margin: "0" }}
          onChange={changeWordHandler}
        />
        <input
          type="text"
          placeholder="перевод на рус"
          name="russian"
          id="russian"
          style={{ margin: "0" }}
          onChange={changeWordHandler}
        />
        <select
          id="category"
          name="category"
          style={{ margin: "0" }}
          defaultValue=""
          onChange={changeWordHandler}
        >
          <option value="" disabled>
            Выбери категорию:
          </option>
          {categories.map(c => <option value={c.title}>{c.title}</option>)}
          
        </select>
        <button type="submit">добавить</button>
      </form>
    </>
  );
};
