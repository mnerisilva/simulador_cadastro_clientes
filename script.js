let field = '';

let tecla_1 = function(){
    console.log('Executou a funcção tecla_1');
    field = retornaCampoEmFoco();
    field.textContent += "1";
    field.value += "1";
}

let tecla_2 = function(){
    console.log('Executou a funcção tecla_2');
    field.textContent += "2";
    field.value += "2";
}

//window.addEventListener('DOMContentLoaded', function(){
    const nome_field = document.getElementById("nome");
    const t1 = document.querySelector(".t1");
    const t2 = document.querySelector(".t2");
    t1.addEventListener('click', tecla_1);
    t2.addEventListener('click', tecla_2);
///});


function retornaCampoEmFoco(){
    const todos = document.querySelectorAll('input');
    todos.forEach(function(elementoImput){
        if(!elementoImput.disabled){
            return elementoImput;
        }
    });
}