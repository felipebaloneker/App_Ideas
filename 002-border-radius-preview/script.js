var box = document.querySelector('.box');
var input = document.querySelectorAll('.values');
var result = document.querySelector('.result');
var verI = 0;

// Contador para cada input na lista
for(let i = 0; i < input.length; i++){
    input[i].addEventListener('change', function(){
        if(!isNaN(input[i].value)){ // Se o input for numerico chama a função Preview
            verI++;
            Preview(i, input[i].value); 
        }
        else{input[i].value = 0;} // Se o usuário digitar um valor não numerico o input volta a ser zero
    })
}

// -- Mostrando codigo na tela - Troca de borda --
function Preview(i,value){
    if(verI == 1){ // para todas as bordas
        box.style.borderRadius = `${value}px`;
        result.innerHTML = `border-radius: ${value}px;\r\n`;}
    else if(i == 0){ //  0  == bordar superior a esquerda
        box.style.borderTopLeftRadius = `${value}px`;
        result.innerHTML = `border-top-left-radius: ${value}px;\r\n`; // \r\n = quebra de linha
    }
    else if(i == 1){ // 1 == bordar superior a direita
        box.style.borderTopRightRadius= `${value}px`;
        result.innerHTML += `border-top-right-radius: ${value}px;\r\n`;
    }
    else if(i == 2){// 2 == bordar inferior a esquerda
        box.style.borderBottomLeftRadius = `${value}px`;
        result.innerHTML += `border-bottom-left-radius: ${value}px;\r\n`;
    }
    else {   // 3 == bordar inferior a direita
        box.style.borderBottomRightRadius = `${value}px`;
        result.innerHTML += `border-bottom-right-radius: ${value}px;\r\n`;
    }
}