const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/adventure');

let AdventureSchema = mongoose.Schema({
  id: Number,
  time: String,
  people: Number,
  activity: String,
  price: Number
});

let Adventures = mongoose.model('Adventures', AdventureSchema);

module.exports = { Adventures, connection };