let currentPlayer = "circle";

// target posluchač na změnu hráče a s tím souvisejích symbolů
const selectButton = (event) => {
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
};

// výběr políček bez využití cyklu
document
  .querySelector("button:nth-child(1)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(2)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(3)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(4)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(5)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(6)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(7)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(8)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(9)")
  .addEventListener("click", selectButton);

document
  .querySelector("button:nth-child(10)")
  .addEventListener("click", selectButton);

// Úkol 3 - bonus 1 - ověření, zda chce uživatel opravdu restart hry
document
  .querySelector(".game__link--restart")
  .addEventListener("click", function () {
    if (!confirm("Opravdu chceš začít znovu?")) {
      event.preventDefault();
    }
  });
