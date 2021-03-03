
// Pegando input
var dates = document.querySelector('.input-timer').value
function Calc(dates){
    console.log(dates)
    var date = new Date(dates).getTime();
    calClock(date);
}
// Calculando 
var count='';
function calClock(date){
    clearInterval(count);
    count = setInterval(function(){
        var now = new Date().getTime();
        if(now > date){
            clearInterval(count);
            ScreenDone();
        }
        else{
            var remain = (date - now);
            var Seconds = Math.floor((remain % (1000 * 60))/1000);
            var Minutes = Math.floor((remain %(1000 * 60 * 60 ))/(1000 * 60));
            var Hours = Math.floor((remain % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)));
            var Days = Math.floor(remain/(1000 * 60 * 60 * 24));
            Screen(Days,Hours,Minutes,Seconds);
        }
        console.log(Hours)
    },1000);
}
// Trocando Valores na tela
function Screen(d,h,m,s){
    var Lday = document.querySelector('.Day'); // label day
    var Lhours = document.querySelector('.Hours');
    var Lmin = document.querySelector('.Minutes');
    var Lsec = document.querySelector('.Seconds');
    Lday.innerHTML = d;
    Lhours.innerHTML = h;
    Lmin.innerHTML = m;
    Lsec.innerHTML = s;
}
// Termino da contagem
function ScreenDone(){
    document.querySelector('.Day').innerHTML = '0';
    document.querySelector('.Hours').innerHTML = '0';
    document.querySelector('.Minutes').innerHTML = '0';
    document.querySelector('.Seconds').innerHTML = '0';
}
//Trocando nome do evento
function Eventname(text){
    var event = document.querySelector('.event-name');
    event.innerHTML= text
}