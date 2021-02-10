var box = document.querySelector('.box');
var input = document.querySelectorAll('.values');
var result = document.querySelector('.result');

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('change', function(){
        if(!isNaN(input[i].value)){ // Verificando se o valor do input é numerico
                if(i == 0){ //  0  == bordar superior a esquerda
                    box.style.borderTopLeftRadius = `${input[i].value}px`;
                    result.innerHTML += `border-top-left-radius: ${input[i].value}px;` + '\r\n'; // \r\n = quebra de linha
                }
                else if(i == 1){ // 1 == bordar superior a direita
                    box.style.borderTopRightRadius= `${input[i].value}px`;
                    result.innerHTML += `border-top-right-radius: ${input[i].value}px;` + '\r\n';
                }
                else if(i == 2){// 2 == bordar inferior a esquerda
                    box.style.borderBottomLeftRadius = `${input[i].value}px`;
                    result.innerHTML += `border-bottom-left-radius: ${input[i].value}px;` + '\r\n';
                }
                else{   // 3 == bordar inferior a direita
                    box.style.borderBottomRightRadius = `${input[i].value}px`;
                    result.innerHTML += `border-bottom-right-radius: ${input[i].value}px` + '\r\n';
                }
        }
    })
}