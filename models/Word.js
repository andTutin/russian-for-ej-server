const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  english: { type: String, required: true },
  russian: { type: String, required: true },
  translit: { type: String, required: true },
  categoryId: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = model("Word", schema);
