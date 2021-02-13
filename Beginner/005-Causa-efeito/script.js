var people = [
    {Nome:'Bruno Yago',Endereço:'Rua Oswaldo Vasques',Telefone:'1226693764', Aniversario:'08/08/1997'},
    {Nome:'Enzo Peixoto',Endereço:'Servidão Agostinho José Machado',Telefone:'4826149140', Aniversario:'05/05/1987'},
    {Nome:'Yuri Gustavo ',Endereço:'Rua Moliterno',Telefone:'5425784940', Aniversario:'21/06/2001'},
    {Nome:'Sabrina Campos',Endereço:'Avenida Maria Cerqueira Lima',Telefone:'7137192261', Aniversario:'25/07/1960'},
    {Nome:'Ana Regina',Endereço:'Avenida Maria Cerqueira Lima',Telefone:'71996142935', Aniversario:'25/07/1970'},
    {Nome:'Natália Alice',Endereço:'Avenida Hudson Gomes Leitão',Telefone:'2736629240', Aniversario:'11/05/1948'},
    {Nome:'Pedro Silveira',Endereço:'Quadra 612 Sul Avenida NS 10',Telefone:'6329381889', Aniversario:'12/07/1982'},
    {Nome:'Igor Manuel',Endereço:'Rua Sergipe',Telefone:'4427598381', Aniversario:'12/06/1965'},
    {Nome:'Agatha Almeida',Endereço:'Rua Baependi',Telefone:'3126273932', Aniversario:'07/02/1973'},
    {Nome:'Iago Barbosa',Endereço:'Rua da Gávea',Telefone:'7129450490', Aniversario:'24/08/1989'},
]

var data = document.querySelector('.dados');
var result = document.querySelector('.result');
console.log(result.innerHTML);
// Adicionando opições 
for(i = 0; i < people.length; i++){
    data.innerHTML += `<option value='${i}'>${people[i].Nome}</option>`;
}
// Mostrando Dados ao selecionar
function View(v){
    result.innerHTML = '';
    for(let [key,value] of Object.entries(people[v])){
        result.innerHTML += `${key}: ${value}<br>`;
    }
}