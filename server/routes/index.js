var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.query)
  res.json(req.query)
});

// router.get("/api/board/list", function (req, res) {
//   var boardList = [
//     { id: "1", title: "제목1", writer: "이수경" }
//   ]
//   res.json(boardList)
// })

module.exports = router;
