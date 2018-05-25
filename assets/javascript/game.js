// RCB-HW3-PART1

var singers, singer, guessedWord;
var wins, guessed, totalGuessLeft;

singers = ['Madonna', 'Beatles', 'Bruno Mars', 'Justin Timberlake', 'Michael Jackson', 'Eminem', 'Sam Smith', 'Adele'];
guessedWord = [];

wins = document.getElementById('wins');
guessed = document.getElementById('guessed');
totalGuessLeft = document.getElementById('count');
word = document.getElementById('word');


function init() {

    singer = singers[Math.floor(Math.random() * singers.length)].split('');
    for (var i = 0; i < singer.length; i++) {
        guessedWord.push('_');
    }

    wins.textContent = 0;
    totalGuessLeft.textContent = 10;
    word.textContent = guessedWord;
}


init();
console.log(singer);


document.body.addEventListener('keyup', function(event) {

    for (var i = 0; i < singer.length; i++) {
        if (event.key === singer[i]) {
            guessedWord[i] = event.key;
        }
    }
});



//             if (guessedArray.indexOf(event.key) === -1) {
//                 guessedArray.push(event.key);
                // guessed.textContent = guessedArray;
//                 totalGuessLeftTemp -= 1;
//                 totalGuessLeft.textContent = totalGuessLeftTemp;
//             }
//         }


// console.log(guessedWord);










// guessedArray = [];
// winsTemp = 0;
// lossesTemp = 0;
// totalGuessLeftTemp = 10;



// console.log("the answer is: "+rand);
// init();

// document.body.addEventListener('keyup', function(event) {

//     // if win, win++;
//     if (event.key === rand) {
//         winsTemp += 1;
//         wins.textContent = winsTemp;
//         reset(); 
//     } else {

//         // if totalGuessLeft === 0, losses++;
//         if (totalGuessLeftTemp === 1) {
//             lossesTemp += 1;
//             losses.textContent = lossesTemp;
//             reset();
//         } else {

//             // if no duplicate, push to array, totalGuessLeft--;


//             if (guessedArray.indexOf(event.key) === -1) {
//                 guessedArray.push(event.key);
                // guessed.textContent = guessedArray;
//                 totalGuessLeftTemp -= 1;
//                 totalGuessLeft.textContent = totalGuessLeftTemp;
//             }
//         }
//     }
// });


// function init() {
//     wins.textContent = winsTemp;
//     losses.textContent = lossesTemp;
//     totalGuessLeft.textContent = totalGuessLeftTemp;
// }
// function reset () {
//     totalGuessLeftTemp = 10;
//     totalGuessLeft.textContent = totalGuessLeftTemp;
//     guessedArray = [];
//     guessed.textContent = guessedArray;
// }