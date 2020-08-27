let trinhDo = 0
let dangToan = ''

let file = [{
        trinhDo: 'L1',
        dangToan: 'SoHoc'
    },
    {
        trinhDo: 'L1',
        dangToan: 'HinhHoc'
    },

    {
        trinhDo: 'L2',
        dangToan: 'SoHoc'
    },
    {
        trinhDo: 'L2',
        dangToan: 'HinhHoc'
    },

    {
        trinhDo: 'L3',
        dangToan: 'SoHoc'
    },
    {
        trinhDo: 'L3',
        dangToan: 'HoHoc'
    },
    {
        trinhDo: 'L3',
        dangToan: 'GiaiToan'
    },

    {
        trinhDo: 'L4',
        dangToan: 'SoHoc'
    },
    {
        trinhDo: 'L4',
        dangToan: 'HinhHoc'
    },
    {
        trinhDo: 'L4',
        dangToan: 'GiaiToan'
    },

    {
        trinhDo: 'L5',
        dangToan: 'SoHoc'
    },
    {
        trinhDo: 'L5',
        dangToan: 'HinhHoc'
    },
    {
        trinhDo: 'L5',
        dangToan: 'GiaiToan'
    }
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

lop1.addEventListener('click', toanLop, 1)
lop2.addEventListener('click', toanLop, 2)
lop3.addEventListener('click', toanLop2, 3)
lop4.addEventListener('click', toanLop2, 4)
lop5.addEventListener('click', toanLop2, 5)

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
    soHoc.addEventListener('click', dangBai, 'so hoc')
    hinhHoc.addEventListener('click', dangBai, 'hinh hoc')
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

function toanLop(grade) {
    bienMat()
    trinhDo = 'L' + grade;
    cacDangToan1()
}

function toanLop2(grade) {
    bienMat()
    trinhDo = 'L' + grade;
    cacDangToan2()
}

function dangBai(questionType) {
    bienMat()
    dangToan = questionType
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
    // if (trinhDo == 'L1' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }
    // if (trinhDo == 'L1' && dangToan == 'so hoc') {
    //     cau5.href = '5CauHinhHocL1.html'
    // }
    // if (trinhDo == 'L2' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL2.html'
    // }
    // if (trinhDo == 'L2' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL2.html'
    // }
    // if (trinhDo == 'L3' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL3.html'
    // }
    // if (trinhDo == 'L3' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL3.html'
    // }
    // if (trinhDo == 'L3' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }
    // if (trinhDo == 'L4' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }
    // if (trinhDo == 'L4' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }
    // if (trinhDo == 'L4' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }
    // if (trinhDo == 'L5' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }
    // if (trinhDo == 'L5' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }
    // if (trinhDo == 'L5' && dangToan == 'so hoc') {
    //     cau5.href = '5CauSoHocL1.html'
    // }

    // #region code lỗi :((
    //  for (let i = 0; i < file.length; i++) {
    //     if (trinhDo == file[i].trinhDo && dangToan == file[i].dangToan) {
    //             cau5.href = '5Cau' + file[i].trinhDo + file[i].dangToan
    //         }
    //     }
    // #endregion
}

function muoiCau() {}