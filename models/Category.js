const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true, unique: true },
});

module.exports = model("Category", schema);
