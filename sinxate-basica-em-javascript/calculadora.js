function calculadora() {
  let novaOperacao = 1;
  while (novaOperacao == 1) {
    const operacao = Number(
      prompt(
        "Escolha uma operação:\n1 - Adição (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)"
      )
    );
    if (operacao > 6 || operacao < 1) {
      alert("Operação inválida!");
    } else {
      const n1 = Number(prompt("Valor 1: "));
      const n2 = Number(prompt("Valor 2: "));
      let resultado;

      function soma() {
        resultado = n1 + n2;
      }
      function subtracao() {
        resultado = n1 - n2;
      }
      function multiplicacao() {
        resultado = n1 * n2;
      }
      function divisaoReal() {
        resultado = n1 / n2;
      }
      function divisaoInteira() {
        resultado = Math.floor(n1 / n2);
      }
      function potenciacao() {
        resultado = n1 ** n2;
      }
      function mostraResultado(op) {
        alert("Resultado: " + n1 + op + n2 + " = " + resultado);
      }
      switch (operacao) {
        case 1:
          soma();
          mostraResultado(" + ");
          break;
        case 2:
          subtracao();
          mostraResultado(" - ");
          break;
        case 3:
          multiplicacao();
          mostraResultado(" * ");
          break;
        case 4:
          divisaoReal();
          mostraResultado(" / ");
          break;
        case 5:
          divisaoInteira();
          mostraResultado(" / ");
          break;
        case 6:
          potenciacao();
          mostraResultado(" ** ");
          break;
      }
    }
    novaOperacao = Number(
      prompt("Deseja realizar uma nova operação?\n1 - Sim\n2 - Sair")
    );
  }
}
calculadora();