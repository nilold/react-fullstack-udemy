const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.schema

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
