// 가져오기
var hello = require("./test2.js")
hello.name = "이수경"
hello.hello()
hello.test(function () {
    console.log("콜백 호출됨")
})
