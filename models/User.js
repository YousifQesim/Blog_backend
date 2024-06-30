// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  age: { type: String, required: true },

});

module.exports = mongoose.model('User', userSchema);



