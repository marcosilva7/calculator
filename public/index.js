document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll(".box-buttons button");

  let valorAtual = ''; // Variável para armazenar a expressão em andamento

  // Clique nos botões
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value || button.textContent.trim();
        handleInput(value); // Passa o valor de cada botão para a função de manipulação
    });
  });

  // Pressionar a tecla
  document.addEventListener("keydown", (data) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];

    if (data.key === "Enter") {
      data.preventDefault();
      calculate(); // Chama a função de cálculo quando pressionado Enter

    } else if (data.key === "Backspace") {
      data.preventDefault();
      const start = display.selectionStart;
      const end = display.selectionEnd;

      if (start !== end) {
        // Apaga o trecho selecionado
        valorAtual = valorAtual.slice(0, start) + valorAtual.slice(end);
        display.value = valorAtual; // Atualiza o display
        display.setSelectionRange(start, start); // Coloca o cursor no lugar certo
      } else {
        // Apaga o último caractere
        valorAtual = valorAtual.slice(0, -1);
        display.value = valorAtual; // Atualiza o display
      }

    } else if (data.key === 'Delete') {
      data.preventDefault();
      valorAtual = ''; // Limpa a expressão
      display.value = valorAtual; // Atualiza o display

    } else if (allowedKeys.includes(data.key)) {
      data.preventDefault();
      valorAtual += data.key; // Adiciona o valor ao final da expressão
      display.value = valorAtual; // Atualiza o display
    }
  });

  // Função que lida com o clique nos botões
  function handleInput(value) {
    switch (value) {
      case "C":
        valorAtual = ""; // Limpa a expressão
        break;

      case "<":
        valorAtual = valorAtual.slice(0, -1); // Apaga o último caractere
        break;

      case "=":
        calculate(); // Realiza o cálculo quando pressionado "="
        return;

      default:
        if (value && value !== 'undefined') {
          valorAtual += value; // Adiciona o valor ao final da expressão
        }
    }
    display.value = valorAtual; // Atualiza o display com a expressão
  }

  // Função para calcular o resultado
  function calculate() {
    try {
      const result = eval(valorAtual); // Calcula o valor de valorAtual
      display.value = `${result}`; // Exibe a expressão e o resultado
      valorAtual = result.toString(); // Atualiza o valor atual com o resultado
      
    } catch {
      display.value = "Error"; // Exibe "Error" se houver algum erro no cálculo
      valorAtual = ''; // Limpa a expressão
    }
  }
});
