const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.schema

const userSchema = new Schema({
  googleId: String,
  facebookId: String
});

mongoose.model('users', userSchema);
