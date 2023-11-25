const readline = require("readline");

const interacaoUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jogoDeAdivinhacao(numeroUsuario) {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

  if (numeroUsuario === numeroAleatorio) {
    return "Parabéns! Você adivinhou o número corretamente!";
  } else {
    return `Desculpe, o número correto era ${numeroAleatorio}. Tente novamente!`;
  }
}

interacaoUsuario.question(
  "Digite um número entre 1 e 10: ",
  (numeroUsuarioInput) => {
    const numeroUsuario = parseInt(numeroUsuarioInput);

    if (!isNaN(numeroUsuario) && numeroUsuario >= 1 && numeroUsuario <= 10) {
      const resultado = jogoDeAdivinhacao(numeroUsuario);
      console.log(resultado);
    } else {
      console.log("Por favor, digite um número válido entre 1 e 10.");
    }

    interacaoUsuario.close();
  }
);
