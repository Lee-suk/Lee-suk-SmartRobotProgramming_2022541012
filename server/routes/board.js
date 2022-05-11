var express = require('express');
var router = express.Router();

router.post('/write', async function (req, res) {
    await Board.create(req.body)
    res.json({
        result: "ok"
    })
})

router.post("/list", async function (req, res) {
    // var boardList = [
    //     { id: "1", title: "제목1", writer: "이수경" }
    // ]

    // 페이지 : offset
    var page = req.body.page

    if (!page) {
        page = 1
    }

    var itemPerPage = 5

    var offset = (page - 1) * itemPerPage

    //DB에서 가져오기
    var boardList = await Board.findAll({
        limit: itemPerPage,
        offset: offset,
        orders: [["writeTime", "DESC"]] //정렬할 필드 값, 정렬할 방향
    })

    // 페이지 총 개수
    var count = await Board.count() //select count(*) from Boards
    var pageCount = Math.ceil(count / itemPerPage) // 반올림 Math.ceil()

    res.json({
        boardList: boardList,
        pageCount: pageCount
    })
})

module.exports = router;
