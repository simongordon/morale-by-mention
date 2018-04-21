const express = require('express');
const twilio = require('twilio');

const { TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM } = process.env;

const ralph = 'https://s3-ap-southeast-2.amazonaws.com/morale-by-mention/ralph.gif';

const app = express();
const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

app.post('/ralph', (req, res) => client.messages
  .create({
    body: req.body.body,
    to: req.body.to,
    from: TWILIO_FROM,
    mediaUrl: ralph,
  })
  .then(message => res.send(message))
  .catch(err => console.log(err)));

module.exports = app;
