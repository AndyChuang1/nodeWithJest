var express = require('express');
var router = express.Router();
import { sum } from '../util/sum';

/* GET home page. */
router.get('/:price', function (req, res, next) {
  const {
    params: { price },
  } = req;
  // console.log(sum);
  const total = sum(price);
  res.json({ price: total });
});
module.exports = router;
