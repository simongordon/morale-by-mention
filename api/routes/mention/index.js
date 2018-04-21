const express = require('express');
const request = require('request-promise');

const { setToken } = require('../../middleware');
const { tanda } = require('../../config');

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

app.post('/mention', (req, res) => {
  req.options = Object.assign(req.options, {
    uri: `${tanda}/sms/send`,
    method: 'POST',
    body: req.body,
  });
  console.log(req.options);
  request(req.options)
    .then(sms => res.send(sms));
});

app.get('/users', (req, res) => {
  req.options.uri = `${tanda}/users`;
  request(req.options)
    .then(users => res.send(users));
});

app.get('/users/random', (req, res) => {
  req.options.uri = `${tanda}/users`;
  request(req.options)
    .then((users) => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      res.send(randomUser);
    });
});

module.exports = app;
