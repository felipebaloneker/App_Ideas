function Converter(){
    var binario = document.querySelector('.binario').value;
    var decimal = document.querySelector('.decimal');
    // fazendo a conveção
    /* O parseInt além de transformar em número também converte a base
    parseInt(num,2) == decimal, parseInt(num,8) == converte em Octal
    */
    decimal.value = parseInt(binario,2);  
}