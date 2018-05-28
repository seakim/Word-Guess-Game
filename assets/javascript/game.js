// RCB-HW3-PART1

var singers, singer, guessedWord, count, winTemp, tempKey;
var wins, guessed, totalGuessLeft;

singers = ['JasonMraz',"MichaelBuble","Beatles"];
winTemp = 0;

wins = document.getElementById('wins');
guessed = document.getElementById('guessed');
totalGuessLeft = document.getElementById('count');
word = document.getElementById('word');

function init() {
    count = 5;
    guessedWord = [];
    guessedKey = [];
    tempKey = -1;
    singer = singers[Math.floor(Math.random() * singers.length)].split('');

    // show me the answer;
    console.log(singer);

    for (var i = 0; i < singer.length; i++) {
        guessedWord.push('_');
    }
    wins.textContent = winTemp;
    totalGuessLeft.textContent = count;
    word.textContent = guessedWord.join(" ");
    guessed.textContent = guessedKey;
}

// init()
init();

document.body.addEventListener('keyup', function (event) {

    tempKey = -1;

    if (guessedKey.includes(event.key.toUpperCase())) {
        alert(event.key.toUpperCase() + " is already guessed.")
    } else {
        for (var i = 0; i < singer.length; i++) {
            if (event.key === singer[i].toLowerCase()) {

                // if guessed key is right, add the key to temp;
                guessedWord[i] = singer[i];
                word.textContent = guessedWord.join(" ");
                tempKey = event.key;
            }
        }

        // count --, only if the guess is wrong, and push the temp key to guessed;
        if (tempKey === -1) {
            count -= 1;
            totalGuessLeft.textContent = count;
            guessedKey.push(event.key.toUpperCase());

        // if temp hold the key, push to guessed;
        } else {
            guessedKey.push(tempKey.toUpperCase());
        }
        guessed.textContent = guessedKey.join(" ");

        // if count === 0, new game, else if all keys are guessed, win ++, new game;
        if (count === 0) {
            alert("you lost! The answer was " + singer);
            init();
        } else if (!guessedWord.includes('_')) {
            winTemp += 1;
            wins.textContent = winTemp;

            singer.join("")
            var song = document.getElementById(singer.join("")); 
            song.play();
            alert("Congrats! Another game?");
            song.pause();
            init();
        }
    }
});