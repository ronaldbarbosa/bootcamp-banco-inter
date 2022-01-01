const FORMULARIO = document.getElementById("entrada");
const LISTA = document.getElementById("saida");

FORMULARIO.onsubmit = function (func) {
    func.preventDefault();
    const CAMPO_TAREFA = document.getElementById("tarefa");
    adicionarTarefa(CAMPO_TAREFA.value);
    FORMULARIO.reset();
}

function adicionarTarefa(descricao){
    const CONTAINER_TAREFA = document.createElement('div'); //Cria div para exibir elementos  no form de saída 
    const NOVA_TAREFA = document.createElement('input'); //Cria constante do tipo input
    const ROTULO_TAREFA = document.createElement('label'); //Cria elemento de texto para receber a tarefa
    const DESCRICAO_TAREFA = document.createTextNode(descricao);

    //Constante do tipo input recebe atributos
    NOVA_TAREFA.setAttribute("type", "checkbox");
    NOVA_TAREFA.setAttribute("name", descricao);
    NOVA_TAREFA.setAttribute("id", descricao);

    ROTULO_TAREFA.setAttribute("for", descricao); //Tag label da tarefa
    ROTULO_TAREFA.appendChild(DESCRICAO_TAREFA); //Conteúdo da tag label

    CONTAINER_TAREFA.classList.add("item"); //Cria uma div para cada item adionado à lista
    CONTAINER_TAREFA.appendChild(NOVA_TAREFA); //Adiciona o input checkbox
    CONTAINER_TAREFA.appendChild(ROTULO_TAREFA); //Adiciona o label com a descrição da tarefa.

    LISTA.appendChild(CONTAINER_TAREFA);
}