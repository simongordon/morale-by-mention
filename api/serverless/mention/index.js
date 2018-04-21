const request = require('request-promise');

module.exports.mention = (event, context, callback) => {
  const { TANDA_AUTH, TANDA_API } = process.env;

  console.log(context);
  const options = {
    uri: `${TANDA_API}/sms/send`,
    Authorization: `bearer ${TANDA_AUTH}`,
    method: 'POST',
    body: context.body,
  };

  request(options)
    .then(() => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
      callback(null, response);
    });
};
