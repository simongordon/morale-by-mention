const express = require('express');
const request = require('request-promise');

const { setToken } = require('../../middleware');

const app = express();


app.use(setToken, (req, res, next) => {
  req.options = {
    headers: {
      Authorization: `bearer ${req.token}`,
    },
    json: true,
  };
  next();
});

app.get('/users', (req, res) => {
  req.options.uri = `${tanda}/users`;
  request(req.options).promise()
    .then(users => res.send(users));
});

app.post('/mention', (req, res) => {

});

app.post('/ralph', (req, res) => {
  req.options = Object.assign(req.options, {
    uri: `${tanda}/users`,
    method: 'POST',
    body: req.body,
  });
  request(req.options)
    .then(user => res.send(user));
});


module.exports = app;
