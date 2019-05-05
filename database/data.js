const mongoose = require('mongoose');
const model = require('./schema.js');

mongoose.connect('mongodb://localhost/adventure');

//id, time,activity, people, price

const data = [
  { id: 1, activity: 'Visit an art museum', price: 10, time: 'afternoon' },
  { id: 2, activity: 'Coffee with a friend', price: 20, time: 'morning' },
  { id: 3, activity: 'See a local band', price: 40, time: 'evening' },
  { id: 4, activity: 'Try a new restaurant', price: 50, time: 'noon' },
  { id: 5, activity: 'Amusement park', price: 60, time: 'afternoon' },
  { id: 6, activity: 'Go fishing', price: 10, time: 'morning' },
  { id: 7, activity: 'Visit a history museum', price: 10, time: 'afternoon' },
  { id: 8, activity: 'Paint something', price: 10, time: 'evening' },
  { id: 9, activity: 'Throw a party', price: 100, time: 'evening' },
  { id: 10, activity: 'Go swimming', price: 5, time: 'noon' },
  { id: 11, activity: 'Explore a new city', price: 20, time: 'afternoon' },
  { id: 12, activity: 'Watch the sunrise', price: 0, time: 'morning' },
  { id: 13, activity: 'Watch the sunset', price: 0, time: 'evening' },
  { id: 14, activity: 'Meditate', price: 0, time: 'morning' },
  { id: 15, activity: 'Go for a hike', price: 0, time: 'morning' },
  { id: 16, activity: 'Cook a new meal', price: 20, time: 'evening' },
  { id: 17, activity: 'Buy new clothes', price: 100, time: 'afternoon' },
  { id: 18, activity: 'Wine and cheese night', price: 50, time: 'evening'},
  { id: 19, activity: 'Start a new book', price: 10, time: 'morning' },
  { id: 20, activity: 'Get a massage', price: 60, time: 'afternoon' },
  { id: 21, activity: 'Volunteer at an animal shelter', price: 0, time: 'afternoon' }
];

model.Adventures.insertMany(data, (err, doc) => {
  if (err) { console.log('error inserting data', err); }
});

// model.Adventures.remove({}, function(err) {
//   console.log('collection removed')
// });