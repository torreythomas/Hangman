//Contains all the spookiest vocabulary known to the human kind.
const words = ['bat', 'costume', 'ghost', 'goblin','haunted', 'mask', 'night', 'pirate', 'spider', 'hero', 'vampire', 'witch'];

//important functionality variables
let randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
let chosenWord = words[randWord]; // Picking a random word from the words array.
let underScore = []; // empty array holding underscores
let wrongWords = []; // array holding incorrect guesses.
let lettersInWord = chosenWord.split(''); // splits the chosenWord in an array. Can be looped through.
let numBlanks = lettersInWord.length; // This dynamically gets the number of blanks in the split version of chosen word.
let docUnderScore = document.getElementById("underscore"); // gets the html element underscore
let docwrongguess = document.getElementById("wrongguess"); // gets the wrong guess html element
let docLivesLeft = document.getElementById("number"); // gets the lives left html element
const maxAttempts = 5;
var guessCount = 0;
var winCount = 0;
var guessesRemaining = maxAttempts - guessCount;



function clearGame(){
  randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
  chosenWord = words[randWord]; // Picking a random word from the words array.
  underScore = [];
  wrongWords = [];
  const maxAttempts = 5;
  guessCount = 0;
  guessesRemaining = maxAttempts - guessCount;
  docLivesLeft.innerHTML = maxAttempts;
  lettersInWord = chosenWord.split(''); // splits the chosenWord in an array. Can be looped through.
  numBlanks = lettersInWord.length;
}

function lostGame(){
  const maxAttempts = 5;
  guessCount = 0;
  guessesRemaining = maxAttempts - guessCount;
  docUnderScore.innerHTML = "";
  docLivesLeft.innerHTML = maxAttempts;
  docwrongguess.innerHTML = "";
  alert("You've Lost");
  clearGame();
  getWord();
}


function getWord(){
// dynamically generates the correct amount of underscores in the chosen word.
let hangWord = () => {
        for (let i = 0; i < chosenWord.length; i++) {
            underScore.push(' _ ');
        }
        return underScore;
    }
hangWord();
docUnderScore.innerHTML = underScore.join(' ');
  } 
  getWord();


  function resetGame(){
    clearGame();
    getWord();
  }

  // listening for keypresses
document.addEventListener('keypress', (event) => {   // the event listener is listening to each key that is pressed and displaying that letter associated in the console using fromCharCode and event.keyCode
    let keyword = String.fromCharCode(event.keyCode);
    underScore[lettersInWord.indexOf(keyword)] = keyword; 
    docUnderScore.innerHTML = underScore.join(' ');
    docwrongguess.innerHTML = wrongWords.join(' ');
 

    guessesRemaining = maxAttempts - guessCount;
  if(lettersInWord.indexOf(keyword) > -1){
}
else {
    wrongWords.push(keyword);
    guessCount++;
    docLivesLeft.innerHTML = guessesRemaining;
}

  if (underScore.join('') === chosenWord){
    winCount++;
    alert("You've Won!")
    document.getElementById('number2').innerHTML = winCount;
    resetGame();

}
else if (guessesRemaining === 0) {
  lostGame();
  resetGame();
}
})












function helloWorld(){
  console.log("Hello World")
}


function iterate (arr) {
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
  }
}




function nestedLoop (arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let a = 0; a < arr.length; a++) {
          console.log(arr[i], arr[a])
      }
  }
}

function search (arr, item, first = 0, last = null) {
  if (!last) last = arr.length
  let midpoint = Math.floor((last - first) / 2) + first
  if (arr[midpoint] === item) return midpoint
  if (arr[midpoint] > item) return search(arr, item, first, midpoint)
  if (arr[midpoint] < item) return search(arr, item, midpoint, last)
}