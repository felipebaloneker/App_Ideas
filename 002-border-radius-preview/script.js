var box = document.querySelector('.box');
var input = document.querySelectorAll('.values');
var result = document.querySelector('.result');
var Btncopy = document.querySelector('.btncopy');
var verI = 0;
var topleft = 0;
var topright = 0;
var bleft = 0;
var bright = 0;
// Contador para cada input na lista
for(let i = 0; i < input.length; i++){
    input[i].addEventListener('change', function(){
        if(!isNaN(input[i].value)){ // Se o input for numerico chamar a função Preview
            verI++;
            Preview(i, input[i].value); 
        }
        else{input[i].value = 0;} // Se o usuário digitar um valor não numerico o input volta a ser zero
    })
}

// -- Mostrando codigo na tela - Troca de borda --
function Preview(i,value){
    if(i == 0){topleft = value;} //  0  == bordar superior a esquerda
    else if(i == 1){topright = value;}// 1 == bordar superior a direita
    else if(i == 2){bleft = value;}
    else{bright = value;}
    box.style.borderRadius = `${topleft}% ${topright}% ${bright}% ${bleft}%`;
    result.value = `border-radius: ${topleft}% ${topright}% ${bright}% ${bleft}%,`;
}

// -- Copiando codigo --
function Copy(){
    result.select();
    document.execCommand('copy'); 
}
Btncopy.addEventListener('click',Copy);