const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const PORT = config.get("port") || 5000;
const app = express();

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/category", require("./routes/category.routes"));
app.use("/api/word", require("./routes/word.routes"));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`app has been started at port ${PORT}`));
  } catch (e) {
    process.exit(1);
  }
}

start();
