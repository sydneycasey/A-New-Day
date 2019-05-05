const mongoose = require('mongoose');
const model = require('./schema.js');

const getActivities = (callback) => {
  model.Adventures
  .find()
  .exec(callback);
};

const getMorning = (callback) => {
  model.Adventures
  .aggregate([ { $match: {time: "morning"} }, { $sample: { size: 1 } } ])
  .exec(callback);
};

const getAfternoon = (callback) => {
  model.Adventures
  .aggregate([ { $match: {time: "afternoon"} }, { $sample: { size: 1 } } ])
  .exec(callback);
};

const getEvening = (callback) => {
  model.Adventures
  .aggregate([ { $match: {time: "evening"} }, { $sample: { size: 1 } } ])
  .exec(callback);
};

module.exports = {
  getActivities,
  getMorning,
  getAfternoon,
  getEvening
};