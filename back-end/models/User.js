//import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create new instance of schema with key properties username, pw and email
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

//export userSchema
module.exports = mongoose.model('User', userSchema);
