var background = document.querySelector('.background');
var color = document.querySelectorAll('.color');
var timer = document.querySelector('.speed');
for(i = 0; i <color.length; i++){
    color[i].addEventListener('change',Troca)
}
// trocando fundo
function Troca(){
        background.style.backgroundColor= `rgba(${color[0].value},${color[1].value},${color[2].value},${color[3].value})`;
}
// velocidade da animação
function Speed(){
    background.style.animationDuration = `${timer.value}s`;
}
timer.addEventListener('change',Speed);

// parando e iniciando animação
var btStop = document.querySelector('.btstop');
btStop.addEventListener("click",Stop)
function Stop(){
    if(btStop.textContent == 'Parar'){
        btStop.textContent = 'Iniciar';
        background.style.animation = 'none';
    }
    else{
        btStop.textContent = 'Parar'
        background.removeAttribute('style');
    }
}