const { responseCreator } = require('../utils');

module.exports = {
  noParams(req, res) {
    res.json(responseCreator(new Date()));
  },
  getDate(req, res) {
    const { date } = req.params;
    res.json(responseCreator(new Date(date)));
  },
};
