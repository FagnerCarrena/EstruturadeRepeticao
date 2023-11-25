const readline = require("readline");

const interacaoUsario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interacaoUsario.question("Digite um número para a tabuada: ", (numeroInput) => {
  const numero = parseInt(numeroInput);

  if (!isNaN(numero)) {
    let multiplicador = 1;

    while (multiplicador <= 10) {
      const resultado = numero * multiplicador;
      console.log(`${numero} x ${multiplicador} = ${resultado}`);
      multiplicador++;
    }
  } else {
    console.log("Por favor, digite um número válido.");
  }

  interacaoUsario.close();
});
