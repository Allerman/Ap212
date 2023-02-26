let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefa = document.querySelector('#listaTarefa');
let btnSairEdicao = document.querySelector('#btnSairEdicao');
let btnAtualizarTarefa = document.querySelector('#btnAtualizarTarefa');
let tarefaEdicao = document.querySelector('#tarefaEdicao');
let inputTarefaNomeEdicao = document.querySelector('#inputTarefaNomeEdicao');

//adicionar tarefa
inputNovaTarefa.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13  /*13 porque e a keycode do enter*/){
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarid(),
        }
//chamando funçao
    adicionarTarefa(tarefa);
    } 
})

btnSairEdicao.addEventListener('click',(e)=>{alterarJanelaEdicao();})

btnAtualizarTarefa.addEventListener('click',(e)=>{
    e.preventDefault();
    let idTarefa = idtarefaEdicao.innerHTML.replace('#','');

    let tarefa = {

    }




})

btnAddTarefa.addEventListener('click', (e) => {
    let tarefa={ 
        nome: inputNovaTarefa.value,
        id: gerarid(),
    }
        adicionarTarefa(tarefa);})


function adicionarTarefa(tarefa){
    let li = criarTag(tarefa);
    listaTarefa.appendChild(li);
    inputNovaTarefa.value = '';
}


function criarTag(tarefa){

    let li = document.createElement('li');
//relacionando as anotaçoes a um id de tarefa
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('texTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('butao');

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('btnAcao');
    btnEdit.innerHTML = '<i class="bi bi-pencil-square"></i>';
    btnEdit.setAttribute('onclick', 'edit('+tarefa.id+')');

    let btnDel = document.createElement('button');
    btnDel.classList.add('btnAcao');
    btnDel.innerHTML = '<i class="bi bi-trash3-fill"></i>';
    btnDel.setAttribute('onclick', 'delet('+tarefa.id+')');

    div.appendChild(btnEdit);
    div.appendChild(btnDel);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function edit(idTarefa){
    let li = document.getElementById(''+idTarefa+'');
    if(li){
        idtarefaEdicao.innerHTML='#' + idTarefa;
        alterarjanelaEdicao();
    }
}


function delet (idTarefa){
    let confirmacao = window.confirm('Deseja Deletar Tarefa?');
    if(confirmacao) {
        let li = document.getElementById(''+idTarefa+'');
        if(li){
            listaTarefa.removeChild(li);
        }
     }
}

//funçao provisoria para criar id, pois irei adicionar um banco de dados
function gerarid(){
    return Math.floor(Math.random()*2000);
}