let field = {};
let elemento;
let elementoInput;
let arrayProximoCampo = [0, 1, 2, 3, 4, 5];
const bt_proximo_campo = document.getElementById('bt-proximo-campo');
const todos = document.querySelectorAll('input');
const tecla = document.querySelector('.t1');
const teclas = document.querySelectorAll('.tecla');
const tela_1 = document.getElementById('tela-1');
const botao_iniciar = document.getElementById('bt-iniciar');
const campoNome = document.getElementById('nome');
const balao = document.querySelector('.balao');









gsap.from("#animacao", {duration: 2, x: 800, opacity: 0, scale: 0.5});

gsap.to(".capa", {delay: 2, x: 650, duration: 2, opacity: 1});

setTimeout(function(){
    balao.style.opacity = 1;
}, 5000);

const arrayMasdCampo1 = document.querySelectorAll('.maskCampo1');
console.log(arrayMasdCampo1);

setTimeout(() => {
    arrayMasdCampo1.forEach(function(elemento){
        elemento.classList.add('mascara');
    });
    campoNome.focus(); 
}, 2000);

/*setTimeout(() => {
    arrayMasdCampo1.forEach(function(elemento){
        elemento.style.opacity = 5;
    });    
}, 15000);*/


teclas.forEach((tecla) => {
    tecla.addEventListener('click', trataEventoClickTeclas);
});

function trataEventoClickTeclas(){
    console.log('ENTROU NA FUNCAO trataEventoClickTeclas')
    const _this = this;
    const _tecla = _this.dataset.tecla;
    const _valor = _this.dataset.valor;

    if(_tecla === "Backspace"){
        backspace();
    } else {
        if(_this.querySelector('span') != null){
            if(!_this.querySelector('span').classList.contains('maskCampo1')){
                alert('Tecla não disponível para esta operação;');
            } else {
                trataTecla(_this, _tecla, _valor);
            }
        }     
    }    
}


desabilitaTodosOsCampos();

let backspace = function(){
    todos.forEach(function(elem){
        if(!elem.disabled){
            elemento = elem;
        }
    });
    field = elemento;
    let tamanhoConteudoDoCampo = field.value.length;
    let novoConteudoDoCampo = '';
    if(tamanhoConteudoDoCampo > 0){
        novoConteudoDoCampo = field.value.substr(0, (tamanhoConteudoDoCampo) -1);
    }
    //let novoConteudoCampo = backspaceLimpa(field.textContent);
    field.textContent = novoConteudoDoCampo;
    field.value = novoConteudoDoCampo;
    field.focus();
}

let trataTecla = function(_this, _tecla, vlr){
    console.log('entrou na funcção trataTecla da tecla_'+vlr);
    _this.style.backgroundImage = "url('images/tlc1_2.png')";
    setTimeout(function(){_this.style.backgroundImage = "url('images/tlc1.png')";},200)
    /*const todos = document.querySelectorAll('input');
    todos.forEach(function(elem){
        if(!elem.disabled){
            elemento = elem;
        }
    });*/
    todos[retornaIndiceCampoEmFoco()];
    field = elemento;
    field.textContent += vlr;
    field.value += vlr;
    field.focus();
}



botao_iniciar.addEventListener('click', () => {
    tela_1.classList.add('esconde-tela-1');
});

function retornaIndiceCampoEmFoco(){
    const todos = document.querySelectorAll('input');
    let campoAtual;
    todos.forEach(function(elem, index){
        if(!elem.disabled){
            elemento = elem;
            console.log('index: '+index);
            campoAtual = index;
        }
    });    
    return campoAtual;  
}























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