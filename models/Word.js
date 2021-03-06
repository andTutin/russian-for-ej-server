const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  english: { type: String, required: true, unique: true },
  russian: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = model("Word", schema);
