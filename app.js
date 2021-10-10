// Change Color box 1
const boxOne = document.getElementById('changeColorsOne')
boxOne.addEventListener("click",getNewColorOne);
function getNewColorOne(){
    var symbol = "0123456789ABCDEF";
    var color  = "#";
    for( let i = 0; i < 6; ++i){
        color += symbol[Math.floor(Math.random() * 16)];
    }
    boxOne.style.backgroundColor = color;
}

// Change Color box 2
const boxTwo = document.getElementById('changeColorsTwo')
boxTwo.addEventListener("click",getNewColorTwo);
function getNewColorTwo(){
    var symbol = "0123456789ABCDEF";
    var color  = "#";
    for( let i = 0; i < 6; ++i){
        color += symbol[Math.floor(Math.random() * 16)];
    }
    boxTwo.style.backgroundColor = color;
}

// Change Color box 3
const boxThree = document.getElementById('changeColorsThree')
boxThree.addEventListener("click",getNewColorThree);
function getNewColorThree(){
    var symbol = "0123456789ABCDEF";
    var color  = "#";
    for( let i = 0; i < 6; ++i){
        color += symbol[Math.floor(Math.random() * 16)];
    }
    boxThree.style.backgroundColor = color;
}

// Change Color box 4
const boxFour = document.getElementById('changeColorsFour')
boxFour.addEventListener("click",getNewColorFour);
function getNewColorFour(){
    var symbol = "0123456789ABCDEF";
    var color  = "#";
    for( let i = 0; i < 6; ++i){
        color += symbol[Math.floor(Math.random() * 16)];
    }
    boxFour.style.backgroundColor = color;
}

