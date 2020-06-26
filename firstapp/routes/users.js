var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log("hi");
  return res.send("hello ");
});
router.post('/', function (req, res, next) {
  res.send(...req.body, post = true);
});
router.put('/', function (req, res, next) {
  res.send(...req.body, put = true);
});
router.patch('/', function (req, res, next) {
  res.send(...req.body, patch = true);
});
// router.delete('/', function (req, res, next) {
//   res.json(...req.body, delete = true);
// });
module.exports = router;
