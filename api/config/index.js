require('dotenv').config();

module.exports = {
  local: 'http://localhost',
  redirectUri: '/callback',
  tanda: 'https://my.tanda.co/api/v2',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};
