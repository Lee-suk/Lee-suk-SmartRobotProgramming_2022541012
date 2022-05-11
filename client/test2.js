// var hello = {
//     name: "",
//     hello: function () { //this를 사용하려면 function 이용
//         console.log("hello" + this.name)

//         function a() {
//             var name = "test"
//             console.log(this.name)
//         }

//         a()
//     }


// }

// var hello = {
//     name: "",
//     hello: function () { //this를 사용하려면 function 이용
//         console.log("hello" + this.name)

//         var a = () => {
//             var name = "test"
//             console.log(this.name)
//         }

//         a()
//     }


// }

var hello = {
    name: "",
    hello: function () {
        console.log("hello" + this.name)
    },

    test: function (callback) {
        setTimeout(callback, 3000)
    }


}

hello.hello()

// 내보내기
module.exports = hello  