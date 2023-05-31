// Function to generate a random word
function generateRandomWord() {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  // Randomly select a vowel for the middle position
  const middleVowel = vowels[Math.floor(Math.random() * vowels.length)];

  // Randomly select a consonant for the first position
  let firstConsonant = consonants[Math.floor(Math.random() * consonants.length)];

  // Randomly select a consonant for the third position
  let thirdConsonant = consonants[Math.floor(Math.random() * consonants.length)];

  // Combine the three parts to form the word
  const word = firstConsonant + '<span class="vowel">' + middleVowel + '</span>' + thirdConsonant;

  return word;
}

// Generate a random word
let randomWord = generateRandomWord();

// Display the word on the page
const wordContainer = document.getElementById('wordContainer');
wordContainer.innerHTML = randomWord;

// Reset button event handler
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
  randomWord = generateRandomWord();
  wordContainer.innerHTML = randomWord;
});