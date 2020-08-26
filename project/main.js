let trinhDo = 0
let dangToan = ''

let file = [
    {trinhDo: 'L1', dangToan: 'SoHoc'},
    {trinhDo: 'L1', dangToan: 'HinhHoc'},
    
    {trinhDo: 'L2', dangToan: 'SoHoc'},
    {trinhDo: 'L2', dangToan: 'HinhHoc'},

    {trinhDo: 'L3', dangToan: 'SoHoc'},
    {trinhDo: 'L3', dangToan: 'HoHoc'},
    {trinhDo: 'L3', dangToan: 'GiaiToan'},

    {trinhDo: 'L4', dangToan: 'SoHoc'},
    {trinhDo: 'L4', dangToan: 'HinhHoc'},
    {trinhDo: 'L4', dangToan: 'GiaiToan'},

    {trinhDo: 'L5', dangToan: 'SoHoc'},
    {trinhDo: 'L5', dangToan: 'HinhHoc'},
    {trinhDo: 'L5', dangToan: 'GiaiToan'}
]

let lop1 = document.getElementById('lop-1')
let lop2 = document.getElementById('lop-2')
let lop3 = document.getElementById('lop-3')
let lop4 = document.getElementById('lop-4')
let lop5 = document.getElementById('lop-5')

let soHoc = document.getElementById('so-hoc-btn')
let hinhHoc = document.getElementById('hinh-hoc-btn')
let giaiToan = document.getElementById('giai-toan-btn')
let cau5 = document.getElementById('cau5-btn')
let cau10 = document.getElementById('cau10-btn')
let choose = document.getElementById('choose')

lop1.addEventListener('click', toanLop1)
lop2.addEventListener('click', toanLop2)
lop3.addEventListener('click', toanLop3)
lop4.addEventListener('click', toanLop4)
lop5.addEventListener('click', toanLop5)

function bienMat() {
    lop5.style.display = 'none'
    lop4.style.display = 'none'
    lop3.style.display = 'none'
    lop2.style.display = 'none'
    lop1.style.display = 'none'
    giaiToan.style.display = 'none'
    soHoc.style.display = 'none'
    hinhHoc.style.display = 'none'
}

function cacDangToan1() {
    soHoc.style.display = 'inline'
    hinhHoc.style.display = 'inline'
    soHoc.addEventListener('click', soCauSoHoc)
    hinhHoc.addEventListener('click', soCauHinhHoc)
    choose.innerHTML = 'Chọn dạng toán'
}

function cacDangToan2() {
    giaiToan.style.display = 'inline'
    soHoc.style.display = 'inline'
    hinhHoc.style.display = 'inline'
    giaiToan.addEventListener('click', soCauGiaiToan)
    soHoc.addEventListener('click', soCauSoHoc)
    hinhHoc.addEventListener('click', soCauHinhHoc)
    choose.innerHTML = 'Chọn dạng toán'
}

function chonSoCauHoi() {
    cau5.style.display = 'inline'
    cau10.style.display = 'inline'
    cau5.addEventListener('click', namCau)
    cau10.addEventListener('click', muoiCau)
    choose.innerHTML = 'Chọn số câu hỏi'
}

function toanLop1() {
    bienMat()
    trinhDo = 'L1'
    cacDangToan1()
}

function toanLop2() {
    bienMat()
    cacDangToan1()
    trinhDo = 'L2'
}

function toanLop3() {
    bienMat()
    trinhDo = 'L3'
    cacDangToan2()
}

function toanLop4() {
    bienMat()
    trinhDo = 'L4'
    cacDangToan2()
}

function toanLop5() {
    bienMat()
    trinhDo = 'L5'
    cacDangToan2()
}

function soCauHinhHoc() {
    bienMat()
    dangToan = 'hinh hoc'
    chonSoCauHoi()
}

function soCauSoHoc() {
    bienMat()
    dangToan = 'so hoc'
    chonSoCauHoi()
}

function soCauGiaiToan() {
    bienMat()
    dangToan = 'giai toan'
    chonSoCauHoi()
}

function namCau() {
    if (trinhDo == 1 && dangToan == 'so hoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    // for (let i = 0; i < file.length; i++){
    //     if (trinhDo == file[i].trinhDo && dangToan == file[i].dangToan){
    //         cau5.href = '5Cau' + file[i].dangToan + file[i].trinhDo
    //         console.log(cau5.href = '5Cau' + file[i].trinhDo + file[i.dangToan])
    //     }
    // }
}

function muoiCau() {

}