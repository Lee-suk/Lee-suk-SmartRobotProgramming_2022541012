var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 회원가입 api 데이터베이스
router.post("/join", async function (req, res) {
  var body = req.body
  console.log(body)

  /*
  // 생성1
  User.create(body).then(result => {
    res.json({
      result: "ok"
    })
  })*/

  // 체크
  var alreadyUser = await User.findOne({
    where: {
      id: body.id
    }
  })

  if (alreadyUser != null) {
    res.json({
      result: "fail",
      message: "이미 존재하는 아이디입니다."
    })
    return //밑에 있는 코드 실행x
  }
  console.log(alreadyUser)

  // 생성2
  var result = await User.create(body)
  res.json({
    result: "ok"
  })
})

// 로그인 api 데이터베이스
router.post("/login", async function (req, res) {
  console.log(req.body)

  //체크
  var user = await User.findOne({
    attributes: ["id", "name"],
    where: {
      id: req.body.id,
      password: req.body.password
    }
  })

  if (user == null) {
    res.json({
      result: "fail",
      message: "아이디 또는 비밀번호가 잘못되었습니다."
    })
    return
  }
  req.session.user = user

  res.json({
    result: "ok",
    user: user
  })
})

router.post('/info', async (req, res) => {
  //로그인 되어있을 때
  if (req.session.user) {
    res.json({
      result: "ok",
      user: req.session.user
    })
  }
  else {
    res.json({
      result: "fail"
    })
  }
})

router.post('/logout', async (req, res) => {
  //로그아웃 했을때
  req.session.destroy()
  res.json({
    result: "ok"
  })
})

module.exports = router;
