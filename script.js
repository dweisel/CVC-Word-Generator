function getRandomWord() {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  let word = '';
  word += consonants[Math.floor(Math.random() * consonants.length)];
  word += vowels[Math.floor(Math.random() * vowels.length)];
  word += consonants[Math.floor(Math.random() * consonants.length)];

  return word;
}

const wordContainer = document.getElementById('wordContainer');
const word = getRandomWord();
const formattedWord = `<span class="vowel">${word[0]}</span>${word[1]}<span class="vowel">${word[2]}</span>`;
wordContainer.innerHTML = formattedWord;

