const request = require('request-promise');

module.exports.getRandomUser = (event, context, callback) => {
  const { TANDA_AUTH, TANDA_API } = process.env;

  const options = {
    uri: `${TANDA_API}/users`,
    headers: {
      Authorization: `bearer ${TANDA_AUTH}`,
    },
  };
  request(options)
    .then((data) => {
      const users = JSON.parse(data);
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const response = {
        statusCode: 200,
        body: JSON.stringify(randomUser),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
      callback(null, response);
    });
};

