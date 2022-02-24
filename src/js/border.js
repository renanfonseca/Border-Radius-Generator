let box = document.querySelector('.box');
let currentRange;
let range;

const boderRadiusInput = document.querySelectorAll('.boderRadiusInput');
const valueInputForboderRadius = ["10%", "10%", "10%", "10%","/","10%","10%","10%","10%"];

box.style.borderRadius = valueInputForboderRadius.join(' ');
boderRadiusInput.forEach((e)=>{
    e.addEventListener('input', ()=>{
        valueInputForboderRadius[e.getAttribute("name")] = e.value + "%";
        box.style.borderRadius = valueInputForboderRadius.join(' ');
        currentRange = '#range'+e.id[e.id.length-1];
        range = document.querySelector(currentRange);
        range.value = e.value;
    })
});

// *******************************

const copyToClipboard = document.querySelector(".copy");
copyToClipboard.addEventListener('click',()=>{
    navigator.clipboard.writeText("border-radius: " + box.style.borderRadius +";");
})

// *******************************

let range1 = document.querySelector("#range1");
let range2 = document.querySelector("#range2");

let range5 = document.querySelector("#range5");
let range8 = document.querySelector("#range8");

let range6 = document.querySelector("#range6");
let range7 = document.querySelector("#range7");


let inputRange1 = document.querySelector("#inputRange1");
range1.addEventListener('input', ()=>{
    inputRange1.value = range1.value;
    updateBorderRadius();
});

let inputRange2 = document.querySelector("#inputRange2");
range2.addEventListener('input', ()=>{
    inputRange2.value = range2.value;
    updateBorderRadius();
});

let inputRange3 = document.querySelector("#inputRange3");
range3.addEventListener('input', ()=>{
    inputRange3.value = range3.value;
    updateBorderRadius();
});

let inputRange4 = document.querySelector("#inputRange4");
range4.addEventListener('input', ()=>{
    inputRange4.value = range4.value;
    updateBorderRadius();
});

let inputRange5 = document.querySelector("#inputRange5");
range5.addEventListener('input', ()=>{
    inputRange5.value = range5.value;
    updateBorderRadius();
});

let inputRange6 = document.querySelector("#inputRange6");
range6.addEventListener('input', ()=>{
    inputRange6.value = range6.value;
    updateBorderRadius();
});

let inputRange7 = document.querySelector("#inputRange7");
range7.addEventListener('input', ()=>{
    inputRange7.value = range7.value;
    updateBorderRadius();
});

let inputRange8 = document.querySelector("#inputRange8");
range8.addEventListener('input', ()=>{
    inputRange8.value = range8.value;
    updateBorderRadius();
});

function updateBorderRadius() {
    box.style.borderRadius = range1.value + "%" + range2.value + "%" + range4.value + "%" + range3.value + "%" + " / " +
    range5.value + "%" +  range7.value +"%" +  range6.value +"%"  + range8.value +"%" ;
}






