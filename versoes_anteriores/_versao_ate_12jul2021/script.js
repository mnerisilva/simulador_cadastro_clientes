let field = {};
let elemento;
let elementoInput;
let arrayProximoCampo = [0, 1, 2, 3, 4, 5];
const bt_proximo_campo = document.getElementById('bt-proximo-campo');
const todos = document.querySelectorAll('input');

desabilitaTodosOsCampos();

let backspace = function(){
    todos.forEach(function(elem){
        if(!elem.disabled){
            elemento = elem;
        }
    });
    field = elemento;
    //retornaCampoEmFoco();
    //field.textContent = "";
    //field.value = "";
    let tamanhoConteudoDoCampo = field.value.length;
    let novoConteudoDoCampo = '';
    if(tamanhoConteudoDoCampo > 0){
        novoConteudoDoCampo = field.value.substr(0, (tamanhoConteudoDoCampo) -1);
    }
    //let novoConteudoCampo = backspaceLimpa(field.textContent);
    field.textContent = novoConteudoDoCampo;
    field.value = novoConteudoDoCampo;
}

let tecla_1 = function(){
    let _this = this;
    _this.style.backgroundImage = "url('images/tlc1_2.png')";
    setTimeout(function(){_this.style.backgroundImage = "url('images/tlc1.png')";},200)
    const todos = document.querySelectorAll('input');
    todos.forEach(function(elem){
        if(!elem.disabled){
            //return elementoImput;
            elemento = elem;
        }
    });
    field = elemento;
    //retornaCampoEmFoco();
    field.textContent += "1";
    field.value += "1";
}

let tecla_2 = function(){
    field.textContent += "2";
    field.value += "2";
}

//window.addEventListener('DOMContentLoaded', function(){
    const nome_field = document.getElementById("nome");
    const t1 = document.querySelector(".t1");
    const t2 = document.querySelector(".t2");
    const back = document.querySelector(".back");
    t1.addEventListener('click', tecla_1);
    t2.addEventListener('click', tecla_2);
    back.addEventListener('click', backspace);
    bt_proximo_campo.addEventListener('click', proximoCampo);
///});


let retornaCampoEmFoco = function (){
    const todos = document.querySelectorAll('input');
    todos.forEach(function(elemento){
        if(!elemento.disabled){
            elemento = elementoInput;
        }
    });
}

function backspaceLimpa(conteudoCampo){
    let lenghtCampo = conteudoCampo.lenght;
    if(lenghtCampo > 0){
        conteudoCampo.substr(0, lenghtCampo -1);
        return conteudoCampo;
    }
}

function proximoCampo(){
    let temAlgumHabiliado = false;
    let campoAtual;
    let proximoCampo;
    let indexProximoCampo;
    let indice;

    todos.forEach((element, index) => {
        if(!element.disabled){ // habilitado
            console.log('entrou no campo habilitado');
            if(index <= todos.length-1){
                proximoCampo   = todos[index+1];
                campoAtual     = element;
                //proximoCampo   = todos[indice];
                indexProximoCampo = indice;
                console.log
                console.log('Elemento: '+campoAtual);
                console.log('Campo atual: '+proximoCampo);
                console.log('Próximo campo: '+(index+1));
                console.log('Próximo campo_: '+indexProximoCampo);
                campoAtual.disabled = true;
                proximoCampo.disabled = false;
            }
        }
    });

}

function desabilitaTodosOsCampos(){
    todos.forEach((element, index) => {
            campoAtual     = document.querySelectorAll('input')[index];
            campoAtual.disabled = true;
    });    
    document.querySelectorAll('input')[0].disabled = false;
}

function retornaIndiceCampoHabilitado(){ 
let indiceCampoHabilitado;
let indiceProximoCampo;
let indice;
    todos.forEach((element, index) => {
        if(!element.disabled){ // habilitado
            indice = index+1;
            campoAtual     = element;
            indiceProximoCampo   = indice;
            console.log
            console.log('Elemento: '+campoAtual);
            console.log('Campo atual: '+indiceProximoCampo);
            console.log('Próximo campo: '+(index+1));
        }
    });    
    return indiceProximoCampo;   
}