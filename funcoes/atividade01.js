const alunos = [
    {
        nome: 'Amélia',
        nota: 10
    },
    {
        nome: 'Maria',
        nota: 9
    },
    {
        nome: 'Ronald',
        nota: 6
    }
];
function verificaAprovados(alunos, mediaFinal){
    let aprovados = [];
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].nota >= mediaFinal){
            let {nome} = alunos[i];
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log('Alunos aprovados: ');
console.log(verificaAprovados(alunos, 7));