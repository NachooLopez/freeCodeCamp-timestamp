const isValidDate = (date) => !Number.isNaN(Date.parse(date));

module.exports = {
  paramSanitizier(req, res, next) {
    let { date } = req.params;
    req.params.date = Number(date) ? Number(date) : date;
    next();
  },
  dateValidator(req, res, next) {
    const { date } = req.params;
    if (isValidDate(date)) {
      next();
    } else {
      res.json({ error: 'Invalid Date' });
    }
  },
};
