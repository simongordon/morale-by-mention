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
  request(req.options)
    .then(sms => res.send(sms));
});

app.get('/users', (req, res) => {
  req.options.uri = `${tanda}/users`;
  request(req.options).promise()
    .then(users => res.send(users));
});


module.exports = app;
