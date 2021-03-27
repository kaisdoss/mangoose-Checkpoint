// We use require our helper function that return our object
// const required = require("./helpers/required.js");
// Empty Require Cache
// console.log(require.cache);
// Object.keys(require.cache).forEach(function(key) { delete require.cache[key] })
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// let personSchema = new Schema({
//   name: required(String, true),
//   age: required(Number, true),
//   favoriteFoods: required(Array),
// });

let personSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number },
  favoriteFoods: { type: Array, default: undefined },
});
module.exports = model("User", personSchema);
