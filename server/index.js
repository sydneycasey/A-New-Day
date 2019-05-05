const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/activities', (req, res) => {
  db.getActivities((err, response) => {
    if (err) { console.log( err); }
    else { res.send(response); }
  });
});

app.get('/morning', (req, res) => {
  db.getMorning((err, response) => {
    if (err) { console.log(err) }
    else { res.send(response); }
  });
});

app.get('/afternoon', (req, res) => {
  db.getAfternoon((err, response) => {
    if (err) { console.log(err) }
    else { res.send(response); }
  });
});

app.get('/evening', (req, res) => {
  db.getEvening((err, response) => {
    if (err) { console.log(err) }
    else { res.send(response); }
  });
});

app.listen(port, () => { console.log(`listening on port ${port} :)`)});