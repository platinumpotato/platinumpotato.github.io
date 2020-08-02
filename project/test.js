// let dapAnDung = document.getElementById('dap-an-dung')
// dapAnDung.addEventListener('click', vang)
// let dapAnSai = document.getElementById('dap-an-sai')
// dapAnSai.addEventListener('click', sai)
// let dapAnSai2 = document.getElementById('dap-an-sai2')
// dapAnSai2.addEventListener('click', sai2)
// let dapAnSai3 = document.getElementById('dap-an-sai3')
// dapAnSai3.addEventListener('click', sai3)

// let ktraDapAn = document.getElementById('answer')
// ktraDapAn.addEventListener('click', answer)

// let oneAnswer = 0
// let rightAnswer = 0
// function vang() {
//     if (oneAnswer > 0){
//         dapAnSai.style.backgroundColor = '#EFEFEF'
//         dapAnSai2.style.backgroundColor = '#EFEFEF'
//         dapAnSai3.style.backgroundColor = '#EFEFEF'
//     }
//     dapAnDung.style.backgroundColor = 'yellow'
//     oneAnswer = 1
//     rightAnswer = 1
// }
// function sai() {
//     if (oneAnswer > 0){
//         dapAnDung.style.backgroundColor = '#EFEFEF'
//         dapAnSai2.style.backgroundColor = '#EFEFEF'
//         dapAnSai3.style.backgroundColor = '#EFEFEF'
//     }
//     dapAnSai.style.backgroundColor = 'yellow'
//     oneAnswer = 1
//     rightAnswer = 2
// }
// function sai2() {
//     if (oneAnswer > 0){
//         dapAnDung.style.backgroundColor = '#EFEFEF'
//         dapAnSai.style.backgroundColor = '#EFEFEF'
//         dapAnSai3.style.backgroundColor = '#EFEFEF'
//     }
//     dapAnSai2.style.backgroundColor = 'yellow'
//     oneAnswer = 1
//     rightAnswer = 2
// }
// function sai3() {
//     if (oneAnswer > 0){
//         dapAnDung.style.backgroundColor = '#EFEFEF'
//         dapAnSai.style.backgroundColor = '#EFEFEF'
//         dapAnSai2.style.backgroundColor = '#EFEFEF'
//     }
//     dapAnSai3.style.backgroundColor = 'yellow'
//     oneAnswer = 1
//     rightAnswer = 2
// }

// function answer(){
//     if (rightAnswer > 1){
//         let checkAnswer = document.createElement('h2')
//         checkAnswer.innerHTML = 'Đáp án sai'
//         document.getElementsById('answerCheck').appendChild(checkAnswer)
//     }
//     else{
//         let checkAnswer = document.createElement('h2')
//         checkAnswer.innerHTML = 'Đáp án đúng'
//         document.getElementsById('answerCheck').appendChild(checkAnswer)
//     }
// }
// let checkAnswer2 = document.getElementById('answerCheck2')
// checkAnswer2.addEventListener('click', check2)
// function check2() {
//     var value = document.querySelector('input[name="cau2"]:checked').value;
//     if (value == 'false') {
//         let ktraDapAn = document.createElement('h2')
//         ktraDapAn.innerHTML = 'Đáp án sai'
//         document.getElementById('kiem-tra2').appendChild(ktraDapAn)
//         document.getElementById('cau2').value = 'false'
//     }
//     else {
//         let ktraDapAn = document.createElement('h2')
//         ktraDapAn.innerHTML = 'Đáp án đúng'
//         document.getElementById('kiem-tra2').appendChild(ktraDapAn)
//         document.getElementById('cau2').value = 'true'
//     }
// }

// khai báo biến các thứ
var numQuestions = $('.question').length
let finished = 0
let score = 0
document.getElementById('score').innerHTML = 'Điểm: ' + score
let diemNeUyenOi = 0
// kiểm tra đáp án
for (let i = 1; i <= numQuestions; i++) {
    let soCauHoi = 'answerCheck' + i
    let answerPrint = 'kiem-tra' + i
    let cauHoi = "cau" + i;

    let checkAnswer = document.getElementById(soCauHoi)
    checkAnswer.addEventListener('click', check)

    function check() {
        var value = document.querySelector('input[name=' + cauHoi + ' ]:checked').value;
        checkAnswer.style.display = 'none'
        finished++
        console.log(numQuestions)
        if (finished == numQuestions) {
            let trackScore = document.getElementById('scoreTrack')
            trackScore.style.display = 'inline'
        }
        if (value == 'false') {
            let ktraDapAn = document.createElement('h2')
            ktraDapAn.innerHTML = 'Đáp án sai'
            document.getElementById(answerPrint).appendChild(ktraDapAn)
        }
        else {
            let ktraDapAn = document.createElement('h2')
            ktraDapAn.innerHTML = 'Đáp án đúng'
            document.getElementById(answerPrint).appendChild(ktraDapAn)
            score++
        }
    }

}
// tính điểm
let trackScore = document.getElementById('scoreTrack')
trackScore.addEventListener('click', tinh_diem)
function tinh_diem() {
    document.getElementById('score').innerHTML = `Điểm: ${score}/${numQuestions}`
}
// trackScore.addEventListener('click', printdiemneUyenoi)
// function printdiemneUyenoi() {
//     console.log(`Diem cua ban ${diemNeUyenOi}/${numQuestions}`)
// }