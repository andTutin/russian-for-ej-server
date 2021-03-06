export const Addmin = () => {
  return (
    <>
      <h1>Админочка</h1>
      <form
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
          id="newcategiry"
        />
        <button type="button" style={{ margin: "0 0 0 10px" }}>
          добавить
        </button>
      </form>
      <br />
      <form
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="новое слово англ"
          name="newwordeng"
          id="newwordreng"
          style={{ margin: "0" }}
        />
        <input
          type="text"
          placeholder="перевод на рус"
          name="newwordrus"
          id="newwordrus"
          style={{ margin: "0" }}
        />
        <select id="category" style={{ margin: "0" }} defaultValue="">
          <option value="" disabled>
            Выбери категорию:
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
        </select>
        <button type="button">добавить</button>
      </form>
    </>
  );
};
