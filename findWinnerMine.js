// DISCLAIMER! Není to moc podle principu DRY, já vím, ale funguje to, snad teda :)

const findWinnerSingleRow = (array, indexRow) => {
  let winnerCandidate = null;
  let counter = 0;
  for (let j = indexRow; j < indexRow + 10; j++) {
    if (array[j] === "_") {
      winnerCandidate = null;
      counter = 0;
    } else if (array[j] === "x" || array[j] === "o") {
      if (array[j] === winnerCandidate) {
        counter++;
        if (counter === 5) {
          return winnerCandidate;
        }
      } else {
        winnerCandidate = array[j];
        counter = 1;
      }
    }
  }
};

const findWinnerRow = (array) => {
  for (let i = 0; i < 100; i += 10) {
    let possibleWinner = findWinnerSingleRow(array, i);
    if (possibleWinner === "x" || possibleWinner === "o") {
      return possibleWinner;
    }
  }
};

const findWinnerSingleColumn = (array, indexColumn) => {
  let winnerCandidate = null;
  let counter = 0;
  for (let j = indexColumn; j < 100; j += 10) {
    if (array[j] === "_") {
      winnerCandidate = null;
      counter = 0;
    } else if (array[j] === "x" || array[j] === "o") {
      if (array[j] === winnerCandidate) {
        counter++;
        if (counter === 5) {
          return winnerCandidate;
        }
      } else {
        winnerCandidate = array[j];
        counter = 1;
      }
    }
  }
};

const findWinnerColumn = (array) => {
  for (let i = 0; i < 10; i++) {
    let possibleWinner = findWinnerSingleColumn(array, i);
    if (possibleWinner === "x" || possibleWinner === "o") {
      return possibleWinner;
    }
  }
};

const findWinnerSingleDiagonal11 = (array, indexDiagonal) => {
  let winnerCandidate = null;
  let counter = 0;
  for (let j = indexDiagonal; j % 10 != 0; j += 11) {
    if (array[j] === "_") {
      winnerCandidate = null;
      counter = 0;
    } else if (array[j] === "x" || array[j] === "o") {
      if (array[j] === winnerCandidate) {
        counter++;
        if (counter === 5) {
          return winnerCandidate;
        }
      } else {
        winnerCandidate = array[j];
        counter = 1;
      }
    }
  }
};

const findWinnerSingleDiagonal12 = (array, indexDiagonal) => {
  let winnerCandidate = null;
  let counter = 0;
  for (let j = indexDiagonal; j < 100; j += 11) {
    if (array[j] === "_") {
      winnerCandidate = null;
      counter = 0;
    } else if (array[j] === "x" || array[j] === "o") {
      if (array[j] === winnerCandidate) {
        counter++;
        if (counter === 5) {
          return winnerCandidate;
        }
      } else {
        winnerCandidate = array[j];
        counter = 1;
      }
    }
  }
};

const findWinnerSingleDiagonal21 = (array, indexDiagonal) => {
  let winnerCandidate = null;
  let counter = 0;

  for (let j = indexDiagonal; j % 10 != 9; j += 9) {
    if (array[j] === "_") {
      winnerCandidate = null;
      counter = 0;
    } else if (array[j] === "x" || array[j] === "o") {
      if (array[j] === winnerCandidate) {
        counter++;
        if (counter === 5) {
          return winnerCandidate;
        }
      } else {
        winnerCandidate = array[j];
        counter = 1;
      }
    }
  }
};

const findWinnerSingleDiagonal22 = (array, indexDiagonal) => {
  let winnerCandidate = null;
  let counter = 0;
  for (let j = indexDiagonal; j < 100; j += 9) {
    if (array[j] === "_") {
      winnerCandidate = null;
      counter = 0;
    } else if (array[j] === "x" || array[j] === "o") {
      if (array[j] === winnerCandidate) {
        counter++;
        if (counter === 5) {
          return winnerCandidate;
        }
      } else {
        winnerCandidate = array[j];
        counter = 1;
      }
    }
  }
};

const findWinnerDiagonal1 = (array) => {
  for (let i = 1; i < 6; i++) {
    let possibleWinner = findWinnerSingleDiagonal11(array, i);
    if (possibleWinner === "x" || possibleWinner === "o") {
      return possibleWinner;
    }
  }

  for (let i = 0; i < 60; i += 10) {
    let possibleWinner = findWinnerSingleDiagonal12(array, i);
    if (possibleWinner === "x" || possibleWinner === "o") {
      return possibleWinner;
    }
  }
};

const findWinnerDiagonal2 = (array) => {
  for (let i = 4; i < 9; i++) {
    let possibleWinner = findWinnerSingleDiagonal21(array, i);
    if (possibleWinner === "x" || possibleWinner === "o") {
      return possibleWinner;
    }
  }

  for (let i = 9; i < 60; i += 10) {
    let possibleWinner = findWinnerSingleDiagonal22(array, i);
    if (possibleWinner === "x" || possibleWinner === "o") {
      return possibleWinner;
    }
  }
};

export const findWinnerMine = (array) => {
  let possibleWinner = findWinnerRow(array);
  if (possibleWinner === "x" || possibleWinner === "o") {
    return possibleWinner;
  }

  possibleWinner = findWinnerColumn(array);
  if (possibleWinner === "x" || possibleWinner === "o") {
    return possibleWinner;
  }

  possibleWinner = findWinnerDiagonal1(array);
  if (possibleWinner === "x" || possibleWinner === "o") {
    return possibleWinner;
  }

  possibleWinner = findWinnerDiagonal2(array);
  if (possibleWinner === "x" || possibleWinner === "o") {
    return possibleWinner;
  }

  if (array.some((square) => square === "_") === false) {
    return "tie";
  }
};
