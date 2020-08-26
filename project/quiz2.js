let questionData = [{
        content: '1+1 = bao nhiêu',
        img: '',
        dapAnA: '1',
        valueA: 'false',
        dapAnB: '3',
        valueB: 'false',
        dapAnC: '2',
        valueC: 'true',
        dapAnD: '4',
        valueD: 'false',
    },
    {
        content: 'Đây là hình gì',
        img: 'https://vtv1.mediacdn.vn/zoom/550_339/2018/11/13/photo-11-15421149127921523173283.jpg',
        dapAnA: 'chữ nhật',
        valueA: 'true',
        dapAnB: 'đáp án sai',
        valueB: 'false',
        dapAnC: 'đáp án sai',
        valueC: 'false',
        dapAnD: 'đáp án sai',
        valueD: 'false',
    },
    {
        content: 'alo',
        img: 'https://vtv1.mediacdn.vn/zoom/550_339/2018/11/13/photo-11-15421149127921523173283.jpg',
        dapAnA: 'chữ nhật',
        valueA: 'true',
        dapAnB: 'đáp án sai',
        valueB: 'false',
        dapAnC: 'đáp án sai',
        valueC: 'false',
        dapAnD: 'đáp án sai',
        valueD: 'false',
    }
]
//#region  code cũ
// khai báo biến các thứ

// let questionData = 'dataCau' + numQuestions
// console.log(questionData)

// let dataCau2 = {
//     content: '1+1 = bao nhiêu',
//     img: '',
//     dapAnA: '1', valueA: 'false',
//     dapAnB: '3', valueB: 'false',
//     dapAnC: '2', valueC: 'true',
//     dapAnD: '4', valueD: 'false',
// }
// let dataCau3 = {
//     content: 'Đây là hình gì',
//     img: './imgs./rectangle',
//     dapAnA: 'chữ nhật', valueA: 'true',
//     dapAnB: 'đáp án sai', valueB: 'false',
//     dapAnC: 'đáp án sai', valueC: 'false',
//     dapAnD: 'đáp án sai', valueD: 'false',
// }
// document.querySelector('.question-title1').innerHTML = 

// kiểm tra đáp án
// let checkAnswer = document.getElementById('answerCheck')
// checkAnswer.addEventListener('click', check)

// let numQuestions = 0
// function check() {

//     let questionTitle = document.getElementById('question-title')
//     // let questionTitle1 = document.getElementById('question-title1')
//     let cauHoi = document.querySelector('.question-title1')
//     let questionImg = document.getElementById('question-img')
//     // đổi câu hỏi
//     questionTitle.innerHTML = `Câu: ${numQuestions + 1}`
// cauHoi.innerText = 'ádvasdajhd'
//     console.log(questionData[numQuestions].content)
//     questionImg.src = questionData[numQuestions].img
//     //đổi đáp án
//     document.getElementById('cau-A-').innerHTML = questionData[numQuestions].dapAnA
//     document.getElementById('cau-B-').innerHTML = questionData[numQuestions].dapAnB
//     document.getElementById('cau-C-').innerHTML = questionData[numQuestions].dapAnC
//     document.getElementById('cau-D-').innerHTML = questionData[numQuestions].dapAnD
//     // đổi value đáp án
//     document.getElementById('cau-A').value = questionData[numQuestions].valueA
//     document.getElementById('cau-B').value = questionData[numQuestions].valueB
//     document.getElementById('cau-C').value = questionData[numQuestions].valueC
//     document.getElementById('cau-D').value = questionData[numQuestions].valueD

//     checkAnswer.innerHTML = 'Trả lời'
//     checkAnswer.addEventListener('click', check)
//     // checkAnswer.removeEventListener('click', next)
//     // document.getElementById('kiem-tra').innerHTML = ''
//     // if (numQuestions < 4) {
//     //     numQuestions++
//     // }

//     // var value = document.querySelector('input[name=' + 'cauHoi' + ' ]:checked').value;
//     // checkAnswer.innerHTML = 'Câu ' + numQuestions
//     // // câu hỏi tiếp theo
//     // checkAnswer.removeEventListener('click', check)
//     // // checkAnswer.addEventListener('click', next)
//     // // finished++
//     // if (finished == numQuestions) {
//     //     let trackScore = document.getElementById('scoreTrack')
//     //     trackScore.style.display = 'inline'
//     // }
//     // if (value == 'false') {
//     //     let ktraDapAn = document.getElementById('kiem-tra')
//     //     ktraDapAn.innerHTML = 'Đáp án sai!'
//     //     ktraDapAn.style.color = 'red'
//     // } else {
//     //     let ktraDapAn = document.getElementById('kiem-tra')
//     //     ktraDapAn.innerHTML = 'Đáp án đúng!'
//     //     ktraDapAn.style.color = '#28B463'
//     //     score++
//     // }
// }
// //next question

// // tính điểm
// // let trackScore = document.getElementById('scoreTrack')
// // trackScore.addEventListener('click', tinh_diem)

// // function tinh_diem() {
// //     document.getElementById('score').innerHTML = `Điểm: ${score}/${numQuestions}`
// // }
//#endregion
var numberQuestion = 0;
var score = 0
let showscore = document.getElementById('score')
// khi mở trang là chạy hàm next question
window.onload = nextQuesstion()

function nextQuesstion() {
    if (numberQuestion < questionData.length) {
        let Data = questionData[numberQuestion]
        // Đổi câu hỏi
        document.getElementById('numberQuestion').innerHTML = `Câu ${numberQuestion + 1}`
        document.getElementById('question-title1').innerHTML = Data.content
        document.getElementById('question-img').src = Data.img
        document.getElementById('cau-A-').innerHTML = Data.dapAnA
        document.getElementById('cau-B-').innerHTML = Data.dapAnB
        document.getElementById('cau-C-').innerHTML = Data.dapAnC
        document.getElementById('cau-D-').innerHTML = Data.dapAnD
        // Đổi value
        document.getElementById('cau-A').value = Data.valueA
        document.getElementById('cau-B').value = Data.valueB
        document.getElementById('cau-C').value = Data.valueC
        document.getElementById('cau-D').value = Data.valueD
    }
}

function check() {
    var tick = document.querySelector('input[name=' + 'cauHoi' + ']:checked')
    var ktraDapAn = document.getElementById('kiem-tra')
    // kiểm tra xem nếu mà người dùng tích thì mới chạy
    if (tick) {
        let value = tick.value
        if (value == 'true') {
            ktraDapAn.innerHTML = 'Đáp án đúng!'
            ktraDapAn.style.color = '#28B463'
            score++
            showscore.innerHTML = `Điểm của bạn: ${score}`
            numberQuestion++
        }
        if (value == 'false') {
            ktraDapAn.innerHTML = 'Đáp án sai!'
            ktraDapAn.style.color = 'red'
            numberQuestion++
        }
        tick.checked = false
    }
    // check xem nếu mà hỏi hết câu hỏi rồi thì hiện ra nút tính điểm
    if (numberQuestion == questionData.length) {
        let trackScore = document.getElementById('scoreTrack')
        trackScore.style.display = 'inline'
    }
}

// đổi cái in ra
function swapFunction() {
    var tick = document.querySelector('input[name=' + 'cauHoi' + ']:checked')
    let answerCheck = document.getElementById('answerCheck')
    if (answerCheck.textContent == "Trả lời") {
        if (tick) {
            check()
            answerCheck.innerHTML = "Câu Tiếp"
        }
    } else if (answerCheck.textContent == "Câu Tiếp") {
        document.getElementById('kiem-tra').innerHTML = ''
        nextQuesstion()
        answerCheck.innerHTML = "Trả lời"
    }
    if (numberQuestion == questionData.length) {
        document.getElementById('answerCheck').style.display = 'none'
    }
}

function tinhDiem() {
    alert('Tổng điểm của bạn: ' + score)
}
document.getElementById('answerCheck').addEventListener('click', swapFunction)
document.getElementById('scoreTrack').addEventListener('click', tinhDiem)