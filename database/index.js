var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'adventures'
});

db.connect( (err) => {
  if (err) throw err;
  console.log("Connected!");
});

const getActivities = (callback) => {
  db.query('SELECT * FROM activities', callback);
};

const getMorning = (callback) => {
  db.query(`SELECT * FROM activities WHERE time = 'morning' order by rand() limit 1`, callback)
};

const getAfternoon = (callback) => {
  db.query(`SELECT * FROM activities WHERE time = 'afternoon ' order by rand() limit 1`, callback)
};

const getEvening = (callback) => {
  db.query(`SELECT * FROM activities WHERE time = 'evening' order by rand() limit 1`, callback)
};

const addActivity =  (data, callback) => {
  db.query('INSERT INTO activities (activity, time) VALUES ? ', [data], callback)
};

module.exports = {
  getActivities,
  getMorning,
  getAfternoon,
  getEvening,
  addActivity
};