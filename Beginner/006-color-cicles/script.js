var background = document.querySelector('.background');
var color = document.querySelectorAll('.color');

for(i = 0; i <color.length; i++){
    color[i].addEventListener('change',troca)
}
// trocando fundo
function troca(){
    background.style.backgroundColor= `rgba(${color[0].value},${color[1].value},${color[2].value},${color[3].value})`;
}