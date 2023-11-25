const readline = require("readline");

const interacaoUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacciAteNumero(numero) {
  let sequencia = [0, 1];
  let i = 2;

  while (sequencia[i - 1] + sequencia[i - 2] <= numero) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    i++;
  }

  return sequencia;
}

interacaoUsuario.question("Digite um número: ", (numeroInput) => {
  const numero = parseInt(numeroInput);

  if (!isNaN(numero) && numero >= 0) {
    const sequenciaFibonacci = fibonacciAteNumero(numero);
    console.log(
      `Sequência de Fibonacci até ${numero}: ${sequenciaFibonacci.join(", ")}`
    );
  } else {
    console.log("Por favor, digite um número não negativo válido.");
  }

  interacaoUsuario.close();
});
