var Numbers = []; // salvando numeros
var view = document.querySelector('.stresult'); // tela com resultado
var viewCalc = document.querySelector('.strcalc'); // tela com calculo
let Maxchar = 8; // maximo de caracteres
let saveOper ; // salvando operador
var btClearAll = document.querySelector('.btclearAll');

// Adicionando Número
function AddNumber(num){
    if(view.value.length < Maxchar){
        view.value += num;
    }
}

// Mostrando Números e Operadores
function Calculate(operator){
    saveOper = operator;
    var number = view.value;
    if(number.length === 0){return}
    Numbers.push(number);
    viewCalc.value = `${number}${operator}`;
    view.value = null;
}

// Calculando
function Result(){
    Numviewcalc = Numbers[Numbers.length -1];
    Numview = view.value;
    if( Numview.length > 0){
        view.value = Action(Number(Numviewcalc),Number(Numview),saveOper);
    }
    if(Numbers.length === 0){return;}

    viewCalc.value += `${Numview} = ${view.value}`;
    Numbers.push(Numview);
    console.log(Numbers);

}

function Action(num1,num2,operator){
    switch(operator){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case 'x': return num1 * num2;
        case '/': return num1 / num2;
    }
}

// Calcular Porcentagem
function Persent(){
    var number = Number(view.value);
    view.value = number/100;
}
// Adicinando Ponto flutuante
function Addpoint(){
    var number = view.value;
    if(!number.includes('.')){
        view.value += '.';
    }
}
// Tornando Positivo ou Negativo
function Plus(){
    var number = Number(view.value);
    number *= -1;
    view.value = number.toString();
}
// Limpado Total
function Clear(){
    view.value = null;
}
// Limpando Tudo
function ClearAll(){
    view.value = null;
    viewCalc.value = null;
    Numbers = [];
}