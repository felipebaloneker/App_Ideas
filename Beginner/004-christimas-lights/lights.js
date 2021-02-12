var bton = document.querySelector('.On');
var btoff= document.querySelector('.Off');
var btrun = document.querySelector('.run');
var light = document.querySelectorAll('.circle');
// Iniciando
function On(){
    for(let i = 0; i < light.length; i++){
        light[i].removeAttribute('style');
    }
}
bton.addEventListener('click',On);

// Pausando
function Off(){
    for(let i = 0; i < light.length; i++){
        light[i].style.animation = 'none';
    }
}
btoff.addEventListener('click',Off);

// Mudando Velocidade
function Speed(){
    var speed = Number(document.querySelector('.timer').value);
    for(let i = 0;i <light.length; i++){
        light[i].style.animationDuration = `${speed}s`;
    }    
}
btrun.addEventListener('click',Speed);