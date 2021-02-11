var btns = document.querySelectorAll('.btnum'); // Lista de botões numericos
var view = document.querySelector('.result'); // tela de amostra
var num1 = 0;
var num2 = 0;
// Pegando Valores numericos
for(let i = 0; i < btns.length;i++){
    var btn = btns[i];
    btn.addEventListener('click',Mostrar);
}

// Mostrando na tela
function Mostrar(){
    view.value = this.value;
}
// Guardando valores
function Save(){
    if(num1 = 0){
        num1 = this.value;
    }
    else{
        num2 = this.value;
    }
}
// Somando
function Soma(){
    soma = num1 + num2;
    console.log(soma);
}
document.querySelector('.btsom').addEventListener('click',Soma)