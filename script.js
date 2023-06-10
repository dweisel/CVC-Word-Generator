let rightButtonClickCount = 0;
let wrongButtonClickCount = 0;
let selectedWordCount = 0;
let generatedWordCount = 0;

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomWord = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  const [consonant1, consonant2] = Array.from({ length: 2 }, () => getRandomElement(consonants));
  const vowel = getRandomElement(vowels);

  return `${consonant1}<span class="vowel">${vowel}</span>${consonant2}`;
};

const generateRandomWord = (isRightButton) => {
  const randomWord = getRandomWord();
  const randomWordContainer = document.getElementById('random-word');
  randomWordContainer.innerHTML = randomWord;
  
  generatedWordCount++;
  
  if (isRightButton) {
    rightButtonClickCount++;
  } else {
    wrongButtonClickCount++;
  }
  
  console.log(`Right Button Click Count: ${rightButtonClickCount}`);
  console.log(`Wrong Button Click Count: ${wrongButtonClickCount}`);
  
  if (generatedWordCount === selectedWordCount) {
    displayButtonStatistics();
  }
};

const displayButtonStatistics = () => {
  const percentage = ((rightButtonClickCount / generatedWordCount) * 100).toFixed(2);
  const statisticsContainer = document.getElementById('statistics');
  statisticsContainer.innerHTML = `Right Button Click Count: ${rightButtonClickCount}<br>
                                    Wrong Button Click Count: ${wrongButtonClickCount}<br>
                                    Percentage of Right Words: ${percentage}%`;
};

const selectWordCount = (event) => {
  selectedWordCount = parseInt(event.target.value);
  generatedWordCount = 0;
  rightButtonClickCount = 0;
  wrongButtonClickCount = 0;
  document.getElementById('statistics').innerHTML = '';
};

window.addEventListener('DOMContentLoaded', () => {
  generateRandomWord(false);
});

