import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";

const selectButton = (event) => {
  // target posluchač na změnu hráče a s tím souvisejích symbolů
  event.target.disabled = true;
  if (currentPlayer === "circle") {
    event.target.classList.add("game__square--circle");
    currentPlayer = "cross";
    document.getElementById("current-player").src = "image/cross.svg";
  } else {
    event.target.classList.add("game__square--cross");
    currentPlayer = "circle";
    document.getElementById("current-player").src = "image/circle.svg";
  }

  // vytváření pole(array) symbolů z hracího plánku
  const playingFieldElms = Array.from(fieldSquares);
  const playingFieldSymbols = playingFieldElms.map((square) => {
    if (square.classList.contains("game__square--circle")) {
      return "o";
    } else if (square.classList.contains("game__square--cross")) {
      return "x";
    } else {
      return "_";
    }
  });

  // hledání vítěze a výpis do alertu
  const winner = findWinner(playingFieldSymbols);
  const alertMessage = () => {
    alert(`Vyhrál hráč se symbolem ${winner}`);
    location.reload();
  };

  if (winner === "o" || winner === "x") {
    setTimeout(alertMessage, 250);
  } else if (winner === "tie") {
    setTimeout(() => {
      alert(`Hra skončila nerozhodně :-o`);
      location.reload();
    }, 250);
  }
};

// výběr políček a přiřazení posluchače s použitím cyklů
const fieldSquares = document.querySelectorAll(".game__square");

fieldSquares.forEach((square) => {
  square.addEventListener("click", selectButton);
});

// Úkol 3 - bonus 1 - ověření, zda chce uživatel opravdu restart hry
document
  .querySelector(".game__link--restart")
  .addEventListener("click", function (event) {
    if (!confirm("Opravdu chceš začít znovu?")) {
      event.preventDefault();
    }
  });
