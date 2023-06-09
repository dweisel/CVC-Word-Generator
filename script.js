const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomWord = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  const [consonant1, consonant2] = Array.from({ length: 2 }, () => getRandomElement(consonants));
  const vowel = getRandomElement(vowels);

  return `${consonant1}<span class="vowel">${vowel}</span>${consonant2}`;
};

const generateRandomWord = () => {
  const randomWord = getRandomWord();
  const randomWordContainer = document.getElementById('random-word');
  randomWordContainer.innerHTML = randomWord;
};
