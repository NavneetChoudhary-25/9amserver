var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/query-params-test", function (req, res, next) {
  var { name, loc } = req.query
  res.send(`Hello This Is ${name}, Am From ${loc}`);
});

router.get("/path-params-test/:name/:loc", function (req, res, next) {
  var { name, loc } = req.params
  res.send(`Hello This Is ${name}, Am From ${loc}`);
});

router.put("/headers-test", function (req, res, next) {
  var { name, loc } = req.headers
  res.send(`Hello This Is ${name}, Am From ${loc}`);
});

router.post("/body-test", function (req, res, next) {
  var { name, loc } = req.body
  res.send(`Hello This Is ${name}, Am From ${loc}`);
});

module.exports = router;
