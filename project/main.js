let trinhDo = 0
let dangToan = ''

let file = [{
        trinhDo: 1,
        dangToan: 'SoHoc',
        namCau: '5CauSoHocL1.html',
        muoiCau: '10CauSoHocL1.html'
    },
    {
        trinhDo: 1,
        dangToan: 'HinhHoc',
        namCau: '5CauHinhHocL1.html',
        muoiCau: '10CauHinhHocL1.html'
    },
    {
        trinhDo: 2,
        dangToan: 'SoHoc',
        namCau: '5CauSoHocL2.html',
        muoiCau: '10CauSoHocL2.html'
    },
    {
        trinhDo: 2,
        dangToan: 'HinhHoc',
        namCau: '5CauHinhHocL2.html',
        muoiCau: '10CauHinhHocL2.html'
    },
    {
        trinhDo: 3,
        dangToan: 'SoHoc',
        namCau: '5CauSoHocL3.html',
        muoiCau: '10CauSoHocL3.html'
    },
    {
        trinhDo: 3,
        dangToan: 'HinhHoc',
        namCau: '5CauHinhHocL3.html',
        muoiCau: '10CauHinhHocL3.html'
    },
    {
        trinhDo: 3,
        dangToan: 'GiaiToan',
        namCau: '5CauGiaiToanL3.html',
        muoiCau: '10CauGiaiToanL3.html'
    },

    {
        trinhDo: 4,
        dangToan: 'SoHoc',
        namCau: '5CauSoHocL4.html',
        muoiCau: '10CauSoHocL4.html'
    },
    {
        trinhDo: 4,
        dangToan: 'HinhHoc',
        namCau: '5CauHinhHocL4.html',
        muoiCau: '10CauHinhHocL4.html'
    },
    {
        trinhDo: 4,
        dangToan: 'GiaiToan',
        namCau: '5CauGiaiToanL4.html',
        muoiCau: '10CauGiaiToanL4.html'
    },

    {
        trinhDo: 5,
        dangToan: 'SoHoc',
        namCau: '5CauSoHocL5.html',
        muoiCau: '10CauSoHocL5.html'
    },
    {
        trinhDo: 5,
        dangToan: 'HinhHoc',
        namCau: '5CauHinhHocL5.html',
        muoiCau: '10CauHinhHocL5.html'
    },
    {
        trinhDo: 5,
        dangToan: 'GiaiToan',
        namCau: '5CauGiaiToanL5.html',
        muoiCau: '10CauGiaiToanL5.html'
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

function toanLop(grade) {
    bienMat()
    trinhDo = grade
    soHoc.style.display = 'inline'
    hinhHoc.style.display = 'inline'
    soHoc.addEventListener('click', dangBai('SoHoc'))
    hinhHoc.addEventListener('click', dangBai('HinhHoc'))
    choose.innerHTML = 'Chọn dạng toán'
}

function toanLop2(grade) {
    bienMat()
    trinhDo = grade;
    giaiToan.style.display = 'inline'
    soHoc.style.display = 'inline'
    hinhHoc.style.display = 'inline'
    giaiToan.addEventListener('click', dangBai('GiaiToan'))
    soHoc.addEventListener('click', dangBai('SoHoc'))
    hinhHoc.addEventListener('click', dangBai('HinhHoc'))
    choose.innerHTML = 'Chọn dạng toán'
}


function dangBai(questionType) {
    bienMat()
    dangToan = questionType
    cau5.style.display = 'inline'
    cau10.style.display = 'inline'
    cau5.addEventListener('click', namCau)
    cau10.addEventListener('click', muoiCau)
    choose.innerHTML = 'Chọn số câu hỏi'
}

lop1.addEventListener('click', toanLop(1))
lop2.addEventListener('click', toanLop(2))
lop3.addEventListener('click', toanLop(3))
lop4.addEventListener('click', toanLop(4))
lop5.addEventListener('click', toanLop(5))
// function cacDangToan1() {
//     soHoc.style.display = 'inline'
//     hinhHoc.style.display = 'inline'
//     soHoc.addEventListener('click', dangBai('SoHoc'))
//     hinhHoc.addEventListener('click', dangBai('HinhHoc'))
//     choose.innerHTML = 'Chọn dạng toán'
// }

// function cacDangToan2() {
//     giaiToan.style.display = 'inline'
//     soHoc.style.display = 'inline'
//     hinhHoc.style.display = 'inline'
//     giaiToan.addEventListener('click', dangBai('GiaiToan'))
//     soHoc.addEventListener('click', dangBai('SoHoc'))
//     hinhHoc.addEventListener('click', dangBai('HinhHoc'))
//     choose.innerHTML = 'Chọn dạng toán'
// }


function namCau() {
    console.log(trinhDo)
    console.log(dangToan)
    if (trinhDo == 1 && dangToan == 'SoHoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    if (trinhDo == 1 && dangToan == 'HinhHoc') {
        cau5.href = '5CauHinhHocL1.html'
    }
    if (trinhDo == 2 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL2.html'
    }
    if (trinhDo == 2 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL2.html'
    }
    if (trinhDo == 3 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL3.html'
    }
    if (trinhDo == 3 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL3.html'
    }
    if (trinhDo == 3 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    if (trinhDo == 4 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    if (trinhDo == 4 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    if (trinhDo == 4 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    if (trinhDo == 5 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    if (trinhDo == 5 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL1.html'
    }
    if (trinhDo == 5 && dangToan == 'o hoc') {
        cau5.href = '5CauSoHocL1.html'
    }

    // for (let i = 0; i < file.length; i++) {
    //     if (trinhDo == file[i].trinhDo && dangToan == file[i].dangToan) {
    //         cau5.href = file[i].namCau
    //     }
    // }
}

function muoiCau() {
}