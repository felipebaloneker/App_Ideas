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

function Speed(){
    background.style.animationDuration = `${timer.value}s`;
}
timer.addEventListener('change',Speed);