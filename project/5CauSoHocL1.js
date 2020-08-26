let questionData = [{
    content: 'Tính: 64 - 23',
    img: '',
    dapAnA: '39',    valueA: 'false',
    dapAnB: '31',    valueB: 'false',
    dapAnC: '41',    valueC: 'true',
    dapAnD: '43',    valueD: 'false',
},
{
    content: 'Điền dấu thích hợp vào [ ]: 76 [ ] 67',
    img: '',
    dapAnA: '>',    valueA: 'true',
    dapAnB: '<',    valueB: 'false',
    dapAnC: '=',    valueC: 'false',
    dapAnD: '?',    valueD: 'false',
},
{
    content: 'Tính: 52 - 11',
    img: '',
    dapAnA: '63',    valueA: 'false',
    dapAnB: '42',    valueB: 'false',
    dapAnC: '41',    valueC: 'true',
    dapAnD: '50',    valueD: 'false',
},
{
    content: 'Điền dấu thích hợp vào [ ]: 13 [ ] 16',
    img: '',
    dapAnA: '=',    valueA: 'false',
    dapAnB: '>',    valueB: 'false',
    dapAnC: '?',    valueC: 'false',
    dapAnD: '<',    valueD: 'true',
},
{
    content: 'Tính: 37 - 24',
    img: '',
    dapAnA: '13',    valueA: 'true',
    dapAnB: '14',    valueB: 'false',
    dapAnC: '15',    valueC: 'false',
    dapAnD: '16',    valueD: 'false',
}
]

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
    console.log(numberQuestion)
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
        if (tick){
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