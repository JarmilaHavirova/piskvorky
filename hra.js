import { findWinnerMine } from "./findWinnerMine.js";

/*
původní cizí import
import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";
*/

let currentPlayer = "circle";

const selectButton = async (event) => {
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
  const winner = findWinnerMine(playingFieldSymbols);
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
  } else {
    // spouštěč "AI" tahu pro křížek
    if (currentPlayer === "cross") {
      // volání API
      const response = await fetch(
        "https://piskvorky.czechitas-podklady.cz/api/suggest-next-move",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            board: playingFieldSymbols,
            player: "x",
          }),
        }
      );

      // zpracování dat získaných z API
      const data = await response.json();
      const { x, y } = data.position;
      const index = fieldSquares[x + y * 10];

      index.click();
    }
  }
};

// výběr políček a přiřazení posluchače s použitím cyklů
const fieldSquares = document.querySelectorAll(".game__square");

fieldSquares.forEach((square) => {
  square.addEventListener("click", selectButton);
});

// Úkol 3 - bonus 1 - ověření, zda chce uživatel opravdu restart hry + přidáno i na Home tlačítko
const preventReset = (event) => {
  if (!confirm("Opravdu chceš začít znovu?")) {
    event.preventDefault();
  }
};

document
  .querySelector(".game__link--restart")
  .addEventListener("click", preventReset);

document
  .querySelector(".game__link--home")
  .addEventListener("click", preventReset);
