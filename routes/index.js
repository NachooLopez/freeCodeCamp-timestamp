const { Router } = require('express');
const { getDate, noParams } = require('../controllers');
const { dateValidator, paramSanitizier } = require('../middlewares');

const router = Router();

router.get('/', noParams);
router.get('/:date', paramSanitizier, dateValidator, getDate);

module.exports = router;
