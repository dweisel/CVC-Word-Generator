// Define an array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Define a string of consonants
const consonants = 'bcdfghjklmnpqrstvwxyz';

// Initialize variables to keep track of button clicks and word count
let greenButtonCount = 0;
let redButtonCount = 0;
let wordCount = 10;
let generatedWords = -1;

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a random word
function getRandomWord() {
  let word = '';

  // Generate a word with either two or three letters
  if (Math.random() < 0.5) {
    // Word with two letters
    const consonant = getRandomElement(consonants);
    const vowel = getRandomElement(vowels);
    word = consonant + "<span class='vowel'>" + vowel + "</span>";
  } else {
    // Word with three letters
    const consonant1 = getRandomElement(consonants);
    const vowel = getRandomElement(vowels);
    const consonant2 = getRandomElement(consonants);
    word = consonant1 + "<span class='vowel'>" + vowel + "</span>" + consonant2;
  }

  return word;
}

// Event handler for the green button click
function greenButtonClicked() {
  greenButtonCount++;
  checkButtonClicks();
}

// Event handler for the red button click
function redButtonClicked() {
  redButtonCount++;
  checkButtonClicks();
}

// Event handler for the word count dropdown selection change
function selectWordCount() {
  const selectElement = document.getElementById('word-count-select');
  wordCount = parseInt(selectElement.value);
  generatedWords = -1;
  document.getElementById('message').style.display = 'none';
  document.getElementById('percentage').textContent = '';
  document.getElementById('play-again-button').style.display = 'none';
  generateRandomWord();
}

// Event handler for the play again button click
function playAgain() {
  greenButtonCount = 0;
  redButtonCount = 0;
  generatedWords = -1;
  document.getElementById('message').style.display = 'none';
  document.getElementById('percentage').textContent = '';
  document.getElementById('play-again-button').style.display = 'none';
  generateRandomWord();

  // Re-enable the buttons
  const greenButtons = document.getElementsByClassName('green-button');
  const redButtons = document.getElementsByClassName('red-button');

  for (let i = 0; i < greenButtons.length; i++) {
    greenButtons[i].disabled = false;
  }

  for (let i = 0; i < redButtons.length; i++) {
    redButtons[i].disabled = false;
  }

  // Reset the green and red button counts
  document.getElementById('green-button-count').textContent = '';
  document.getElementById('red-button-count').textContent = '';
}

// Function to update the green and red button counts
function updateCounts() {
  const greenButtonCountElement = document.getElementById('green-button-count');
  const redButtonCountElement = document.getElementById('red-button-count');
  greenButtonCountElement.textContent = `${greenButtonCount} words read correctly.`;
  redButtonCountElement.textContent = `${redButtonCount} words read incorrectly`;
}

// Function to check if the word count has been reached
function checkWordCount() {
  if (generatedWords >= wordCount) {
    const totalButtonClicks = greenButtonCount + redButtonCount;
    const greenPercentage = ((greenButtonCount / totalButtonClicks) * 100).toFixed(2);
    document.getElementById('percentage').textContent = `Words read correctly: ${greenPercentage}%`;
    document.getElementById('play-again-button').style.display = 'block';

    // Disable the buttons
    const greenButtons = document.getElementsByClassName('green-button');
    const redButtons = document.getElementsByClassName('red-button');

    for (let i = 0; i < greenButtons.length; i++) {
      greenButtons[i].disabled = true;
    }

    for (let i = 0; i < redButtons.length; i++) {
      redButtons[i].disabled = true;
    }
  }
}

// Function to check if the word count has been reached after each button click
function checkButtonClicks() {
  if (greenButtonCount + redButtonCount >= wordCount) {
    updateCounts();
    checkWordCount();
  }
}

// Function to generate a random word and check the word count
function generateRandomWord() {
  generatedWords++;
  const randomWordContainer = document.getElementById('random-word');
  randomWordContainer.innerHTML = getRandomWord();
  checkWordCount();
}

// Generate a random word when the page loads
generateRandomWord();
