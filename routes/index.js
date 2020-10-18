var express = require('express');
var router = express.Router();
import { sum } from '../util/sum';
import { getTodo } from '../service/jsonHolder';

/* GET home page. */
router.get('/price/:price', function (req, res, next) {
  const {
    params: { price },
  } = req;
  // console.log(sum);
  const total = sum(price);
  res.json({ price: total });
});

router.get('/getTodo', async (req, res) => {
  const data = await getTodo();
  res.json(data);
});
module.exports = router;
