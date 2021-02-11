var btns = document.querySelectorAll('.btnum'); // Lista de botões
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