(async () => {
    function test() {
        console.log("3초뒤 실행")
    }

    setTimeout(test, 3000)

    console.log("바로실행")
})()