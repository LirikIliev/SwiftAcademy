var playPause1 = anime({
    targets: 'div.box.first',
    translateY: [
        // { value: 160, duration: 1200 },
        { value: 0, duration: 800 },
    ],
    rotateY: {
        value: "0.5turn",
        easing: "easeInOutSine"
    },
    delay: function (el, i, l) { return i * 1700 },
    autoplay: false,
})
document.querySelector('.box.first').onclick = playPause1.play;

var playPause1 = anime({
    targets: 'div.box.second',
    translateY: [
        { value: 160, duration: 1200 },
        { value: 0, duration: 800 },
    ],
    rotate: {
        value: "1turn",
        easing: "easeInOutSine"
    },
    delay: function (el, i, l) { return i * 1700 },
    autoplay: false,
})
document.querySelector('.box.second').onclick = playPause1.play;

var playPause1 = anime({
    targets: 'div.box.third',
    translateY: [
        { value: 160, duration: 1200 },
        { value: 0, duration: 800 },
    ],
    rotate: {
        value: "1turn",
        easing: "easeInOutSine"
    },
    delay: function (el, i, l) { return i * 1700 },
    autoplay: false,
})
document.querySelector('.box.third').onclick = playPause1.play;

var playPause1 = anime({
    targets: 'div.box.fourth',
    translateZ: [
        { value: 160, duration: 1200 },
        { value: 0, duration: 800 },
    ],
    rotate: {
        value: "1turn",
        easing: "easeInOutSine"
    },
    delay: function (el, i, l) { return i * 1700 },
    autoplay: false,
})
document.querySelector('.box.fourth').onclick = playPause1.play;



// anime({
//     targets: 'div.box.second',
//     translateY: [
//         { value: 160, duration: 1200, delay: 1500 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         delay: 1500
//     }
// })
// anime({
//     targets: 'div.box.third',
//     translateY: [
//         { value: 160, duration: 1200, delay: 3000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         delay: 3000
//     }
// })
// anime({
//     targets: 'div.box.fourth',
//     translateY: [
//         { value: 160, duration: 1200, delay: 4500 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         delay: 4500
//     }
// })

// var domNote = document.querySelectorAll(".box");
// for (let i = 0; i < domNote.length; i++) {
//     domNote[i].innerHTML = "Hello World"
// }

// var playPause = anime({
//     targets: 'div.box',
//     translateY: [
//         { value: 160, duration: 1200 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine"
//     },
//     delay: function (el, i, l) { return i * 1700 },
//     autoplay: false,
// })

// document.querySelector('.box').onclick = playPause.play;
