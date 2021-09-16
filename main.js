let hedTitle = document.querySelector('.air')


let h1text = hedTitle.innerHTML
    hedTitle.innerHTML  = ''
    
let i = 0
function txt() {
    if (i < h1text.length) {
        hedTitle.innerHTML += h1text [i]
        i++
        setTimeout(() => {
            txt() 
        }, 100);
    }
} 
txt()

///////////////////////////////////
let matn1 = document.querySelector('.matn1');
let h2Text1 = matn1.innerHTML 
matn1.innerHTML = ''
let j = 0;

function txt1() {
    if (j< h2Text1.length) {
        matn1.innerHTML += h2Text1[j]
        j++
        setTimeout(() => {
            txt1()
        }, 20);
    }
}
txt1()



let matn2 = document.querySelector('.matn2');
let h3Text1 = matn2.innerHTML
matn2.innerHTML = ''
let o = 0;

function txt2() {
    if (o< h3Text1.length) {
        matn2.innerHTML += h3Text1[o]
        o++
        setTimeout(() => {
            txt2()
        }, 20);
    }
}
txt2()



let matn3 = document.querySelector('.matn3');
let h4Text1 = matn3.innerHTML
matn3.innerHTML = ''
let k = 0;

function txt3() {
    if (k< h4Text1.length) {
        matn3.innerHTML += h4Text1[k]
        k++
        setTimeout(() => {
            txt3()
        }, 40);
    }
}
txt3()



let matn4 = document.querySelector('.matn4');
let h5Text1 = matn4.innerHTML
matn4.innerHTML = ''
let b = 0;

function txt4() {
    if (b< h5Text1.length) {
        matn4.innerHTML += h5Text1[b]
        b++
        setTimeout(() => {
            txt4()
        }, 40);
    }
}
txt4()