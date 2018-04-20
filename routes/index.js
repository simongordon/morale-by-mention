/* eslint import/no-dynamic-require:0 */

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const basename = path.basename(__filename);
const app = express();

app.use(cors());
app.use(bodyParser.json());

fs.readdirSync(__dirname)
  .filter(file => file !== basename)
  .forEach((file) => {
    const routes = require(path.join(__dirname, file));
    app.use(routes);
  });

module.exports = app;
