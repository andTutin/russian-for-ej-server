require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 5000;
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/category", require("./routes/category.routes"));
app.use("/api/word", require("./routes/word.routes"));

async function start() {
  try {
    await mongoose.connect(MONGO_URL, {
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
