const mongoose = require('mongoose');
const model = require('./schema.js');

const getActivities = (callback) => {
  model.Adventures.
  find().
  exec(callback);
};

module.exports = { getActivities };