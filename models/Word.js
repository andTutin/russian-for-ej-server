const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  english: { type: String, required: true },
  russian: { type: String, required: true },
  translit: { type: String, required: true },
  category: { type: String, required: true },
  addedBy: { type: String, required: true },
  addedTime: { type: String, required: true },
});

module.exports = model("Word", schema);
