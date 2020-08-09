let lop1 = document.getElementById('lop-1')
let lop2 = document.getElementById('lop-2')
let lop3 = document.getElementById('lop-3')
let lop4 = document.getElementById('lop-4')
let lop5 = document.getElementById('lop-5')
let choose = document.getElementById('choose')

lop1.addEventListener('click', dangToan1)
lop2.addEventListener('click', dangToan1)
lop3.addEventListener('click', dangToan2)
lop4.addEventListener('click', dangToan2)
lop5.addEventListener('click', dangToan2)
function dangToan1() {
    lop5.style.display = 'none'
    lop4.style.display = 'none'
    lop3.style.display = 'none'
    lop1.innerHTML = 'Số học'
    lop2.innerHTML = 'Hình học'
    choose.innerHTML = 'Chọn dạng toán'
    lop1.addEventListener('click', soCauHoi)
    lop2.addEventListener('click', soCauHoi)
}
function dangToan2() {
    lop1.style.display = 'none'
    lop2.style.display = 'none'
    lop3.innerHTML = 'Giải toán'
    lop4.innerHTML = 'Hình học'
    lop5.innerHTML = 'Số học'
    choose.innerHTML = 'Chọn dạng toán'
    lop3.addEventListener('click', soCauHoi)
    lop4.addEventListener('click', soCauHoi)
    lop5.addEventListener('click', soCauHoi)
}
function soCauHoi() {
    lop3.style.display = 'none'
    lop4.style.display = 'none'
    lop5.style.display = 'none'
    lop1.style.display = 'inline'
    lop2.style.display = 'inline'
    lop1.removeEventListener('click', dangToan1)
    lop2.removeEventListener('click', dangToan1)
    lop3.removeEventListener('click', dangToan2)
    lop4.removeEventListener('click', dangToan2)
    lop5.removeEventListener('click', dangToan2)
    lop1.innerHTML = '5 câu'
    lop2.innerHTML = '10 câu'
    choose.innerHTML = 'Chọn số câu hỏi'
}