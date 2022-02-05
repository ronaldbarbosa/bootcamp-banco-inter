const pessoa1 = {
    nome: 'Maria',
    idade: 23
};
const pessoa2 = {
    nome: 'Ronald',
    idade: 26
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

console.log(calculaIdade.call(pessoa1, 4));
console.log(calculaIdade.apply(pessoa2, [2]));