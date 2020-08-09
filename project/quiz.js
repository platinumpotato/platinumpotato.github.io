// khai báo biến các thứ
let numQuestions = 2
let finished = 0
let score = 0
document.getElementById('score').innerHTML = 'Điểm: ' + score

// kiểm tra đáp án
let checkAnswer = document.getElementById('answerCheck')
checkAnswer.addEventListener('click', check)
function check() {
    var value = document.querySelector('input[name=' + 'cauHoi' + ' ]:checked').value;
    checkAnswer.innerHTML = 'Câu ' + 2
    // câu hỏi tiếp theo
    checkAnswer.removeEventListener('click', check)
    checkAnswer.addEventListener('click', next)
    function next() {
        let questionTitle = document.getElementById('question-title')
        // đổi câu hỏi
        questionTitle.innerHTML = 'Câu 2) 1 + 1 = bao nhiêu'
        //đổi đáp án
        document.getElementById('cau-A-').innerHTML = '1'
        document.getElementById('cau-B-').innerHTML = '3'
        document.getElementById('cau-C-').innerHTML = '2'
        document.getElementById('cau-D-').innerHTML = '4'
        // đổi value đáp án
        document.getElementById('cau-A').value = 'false'
        document.getElementById('cau-B').value = 'false'
        document.getElementById('cau-C').value = 'true'
        document.getElementById('cau-D').value = 'false'

        checkAnswer.innerHTML = 'Trả lời'
        checkAnswer.addEventListener('click', check)
        document.getElementById('kiem-tra').innerHTML = ''
    }
    finished++
    if (finished == numQuestions) {
        let trackScore = document.getElementById('scoreTrack')
        trackScore.style.display = 'inline'
    }
    if (value == 'false') {
        let ktraDapAn = document.getElementById('kiem-tra')
        ktraDapAn.innerHTML = 'Đáp án sai!'
        ktraDapAn.style.color = 'red'
    }
    else {
        let ktraDapAn = document.getElementById('kiem-tra')
        ktraDapAn.innerHTML = 'Đáp án đúng!'
        ktraDapAn.style.color = '#28B463'
        score++
    }
}
// tính điểm
let trackScore = document.getElementById('scoreTrack')
trackScore.addEventListener('click', tinh_diem)
function tinh_diem() {
    document.getElementById('score').innerHTML = `Điểm: ${score}/${numQuestions}`
}