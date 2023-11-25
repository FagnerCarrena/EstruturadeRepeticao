const readline = require("readline");

const interacaoUsario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interacaoUsario.question("Digite um número: ", (numeroInput) => {
  const numero = parseInt(numeroInput);

  if (!isNaN(numero)) {
    let soma = 0;
    let contador = 1;

    do {
      soma += contador;
      contador++;
    } while (contador <= numero);

    console.log(`A soma dos números de 1 até ${numero} é: ${soma}`);
  } else {
    console.log("Por favor, digite um número válido.");
  }

  interacaoUsario.close();
});
