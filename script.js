function getRandomWord() {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let word = '';
  word += getRandomElement(consonants);
  word += '<span class="vowel">' + getRandomElement(vowels) + '</span>';
  word += getRandomElement(consonants);

  return word;
}

function generateRandomWord() {
  const randomWord = getRandomWord();
  document.getElementById('random-word').innerHTML = randomWord;
}
