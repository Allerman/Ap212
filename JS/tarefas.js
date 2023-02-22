let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefa = document.querySelector('#listaTarefa');

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


//botao de adicionar
btnAddTarefa.addEventListener('click', (e) => {
    let tarefa={ 
        nome: inputNovaTarefa.value,
        id: gerarid(),
    }
//chamando funçao
    adicionarTarefa(tarefa);

})


function adicionarTarefa(tarefa){
    let li = criarTag(tarefa);
    listaTarefa.appendChild(li);
    inputNovaTarefa.value = '';
}


//criando nova tag com as tarefas adicionadas
function criarTag(tarefa){
    let li = document.createElement('li');

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
    alert(idTarefa);
}

function delet (idTarefa){
    alert(idTarefa);
}

//funçao provisoria para criar id, pois irei adicionar um banco de dados
function gerarid(){
    return Math.floor(Math.random()*2000);
}