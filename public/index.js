const display = document.querySelector("#display");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".box-buttons button");

  // Clique nos botões
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value || button.textContent.trim();
        handleInput(value);
    });
  });
});

// Pressinar a tecla
document.addEventListener("keydown", (data) => {
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];

    if (data.key === "Enter") {
      data.preventDefault();
      calculate();

    } else if (data.key === "Backspace") {
      data.preventDefault();
      const start = display.selectionStart;
      const end = display.selectionEnd;

      if (start !== end) {
        // Apaga o trecho selecionado
        display.value = display.value.slice(0, start) + display.value.slice(end);
        display.setSelectionRange(start, start); // Coloca o cursor no lugar certo
      } else {
        // Comportamento normal: apaga o último caractere
        display.value = display.value.slice(0, -1);
      };

    } else if (data.key === 'Delete') {
        data.preventDefault();
        display.value = '';

    } else if (allowedKeys.includes(data.key)) {
        data.preventDefault();
        display.value += data.key;
    };
  });

function handleInput(value) {
  switch (value) {
    case "C":
      display.value = "";
      break;

    case "<":
      display.value = display.value.slice(0, -1);
      break;

    case "=":
        calculate();
        break;

    default:
        if (value && value !== 'undefined') {
            display.value += value;
        }
  };
};

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  };
};
