const TANDA_AUTH = process.env.TANDA_AUTH_TOKEN;

const setToken = (req, res, next) => {
  req.token = TANDA_AUTH;
  return next();
};

module.exports = {
  setToken,
};
