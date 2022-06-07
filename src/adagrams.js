export const drawLetters = () => {
  // Implement this method for wave 1

  // Make object that sets the letter frequency
  const letterFrequency = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
  };

  // Populate array letterPool

  let letterPool = [];
  
  for (let key in letterFrequency) {
    let value = letterFrequency[key];
    for (let i = 0; i < value; i++ ) {
      letterPool.push(key);
    }
  }
  
  // Draw 10 letters to array hand

  const nLettersToDraw = 10;
  let hand = [];

  for (let i = 0; i < nLettersToDraw; i++) {
    let index = Math.floor(Math.random()*letterPool.length);
    let letter = letterPool[index];
    hand.push(letter);
    letterPool.splice(index, 1);
  }
  
  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  let lettersInHandCopy = [...lettersInHand];

  let upperInput = input.toUpperCase();

  for (let i = 0; i < upperInput.length; i++) {
    let index = lettersInHandCopy.indexOf(upperInput[i]);
    if (index !== -1) {
      lettersInHandCopy.splice(index, 1);
    } else {
      return false;
    }  
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const letterPoints = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
  };

  let totalScore = 0;
  
  let upperWord = word.toUpperCase();
  
  for (let letter of upperWord) {
    totalScore += letterPoints[letter];
  };
  
  if (word.length >= 7) {
    totalScore += 8;
  };

  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
