var box = document.querySelector('.box');
var values = document.querySelectorAll('.values[value]');
for(let i = 0; i < values.length; i++){
    values[i].addEventListener('change', function(){
        console.log(i);
        console.log(values[i].value);
        if(i == 0){
            box.style.borderRadius = `${values[i].value}px`;
        }
    })
}