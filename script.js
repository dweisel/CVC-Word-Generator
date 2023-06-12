    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let greenButtonCount = 0;
    let redButtonCount = 0;
    let wordCount = 10;
    let generatedWords = -1;

    function getRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function getRandomWord() {
      const consonant1 = getRandomElement(consonants);
      const consonant2 = getRandomElement(consonants);
      const vowel = getRandomElement(vowels);
      
      return consonant1 + "<span class='vowel'>" + vowel + "</span>" + consonant2;
    }

    function generateRandomWord() {
      const randomWordContainer = document.getElementById('random-word');
      randomWordContainer.innerHTML = getRandomWord();
    }

    function greenButtonClicked() {
      greenButtonCount++;
      checkButtonClicks();
    }

    function redButtonClicked() {
      redButtonCount++;
      checkButtonClicks();
    }

    function selectWordCount() {
      const selectElement = document.getElementById('word-count-select');
      wordCount = parseInt(selectElement.value);
      generatedWords = -1;
      document.getElementById('message').style.display = 'none';
      document.getElementById('percentage').textContent = '';
      document.getElementById('play-again-button').style.display = 'none';
      generateRandomWord();
    }

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

    function updateCounts() {
      const greenButtonCountElement = document.getElementById('green-button-count');
      const redButtonCountElement = document.getElementById('red-button-count');
      greenButtonCountElement.textContent = `${greenButtonCount} words read correctly.`;
      redButtonCountElement.textContent = `${redButtonCount} words read incorrectly`;
    }

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

    function checkButtonClicks() {
      if (greenButtonCount + redButtonCount >= wordCount) {
        updateCounts();
        checkWordCount();
      }
    }

    function generateRandomWord() {
      generatedWords++;
      const randomWordContainer = document.getElementById('random-word');
      randomWordContainer.innerHTML = getRandomWord();
      checkWordCount();
    }

    generateRandomWord(); // Generate a random word when the page loads
