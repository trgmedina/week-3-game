var characterNames = [
  "ARRIETTY",
  "HOWL",
  "KIKI",
  "PONYO",
  "KAGUYA",
  "MONONOKE",
  "CHIHIRO",
  "HAKU",
  "TOTORO"
];

var wins = 0;
var lives = 10;
var ltrPlacement = [];
var wrongGuess = [];
var randomNum = Math.floor((Math.random()*(characterNames.length-1))); 
var randomChar = characterNames[randomNum];
var charArray = randomChar.split("");

//Changes picture
function changeImage() {
  if (randomChar === "ARRIETTY") {
    document.getElementById("ghibli-image").src = "assets/images/arrietty.jpg";
  }
  else if (randomChar === "HOWL") {
    document.getElementById("ghibli-image").src = "assets/images/howls.jpg";
  }
  else if (randomChar === "KIKI") {
    document.getElementById("ghibli-image").src = "assets/images/kiki.jpg";
  }
  else if (randomChar === "PONYO") {
    document.getElementById("ghibli-image").src = "assets/images/ponyo.jpg";
  }
  else if (randomChar === "KAGUYA") {
    document.getElementById("ghibli-image").src = "assets/images/princesskaguya.jpg";
  }
  else if (randomChar === "MONONOKE") {
    document.getElementById("ghibli-image").src = "assets/images/princessmononoke.jpeg";
  }
  else if (randomChar === "CHIHIRO") {
    document.getElementById("ghibli-image").src = "assets/images/spiritedaway.jpg";
  }
  else if (randomChar === "HAKU") {
    document.getElementById("ghibli-image").src = "assets/images/spiritedaway.jpg";
  }
  else if (randomChar === "TOTORO") {
    document.getElementById("ghibli-image").src = "assets/images/totoro.jpg";
  }
}

// Resets the game.
function restart() {
  lives = 10;
  ltrPlacement = [];
  wrongGuess = [];
  randomNum = Math.floor((Math.random()*(characterNames.length-1))); 
  randomChar = characterNames[randomNum];
  charArray = randomChar.split("");

  // Generating blanks spaces for random film name
  for (var i=0; i < charArray.length; i++) {
    
    var isLetter = charArray[i];

    if (isLetter.match(/[a-z]/i)) {
      ltrPlacement[i] = "_ ";
    }
  }
}

// Generating blanks spaces for random film name
for (var i=0; i < charArray.length; i++) {
    
  var isLetter = charArray[i];

  if (isLetter.match(/[a-z]/i)) {
    ltrPlacement[i] = "_ ";
  }
}

document.onkeyup = function(event){
  var userGuess = event.key.toUpperCase();
  var counter = 0;
  var allLettersFound;

  for (var i=0; i < charArray.length; i++) {

    if (userGuess === charArray[i]) {
      ltrPlacement[i] = charArray[i];
      counter++;
    }
  }

  if (counter === 0 && userGuess.length === 1) {
    wrongGuess.push(userGuess);
    lives--;
  }

  var wrongLetter = wrongGuess.toString();
  printLtrPlacement = ltrPlacement.join(" ");

  var html = "<h4>Press any key to start playing!</h4>" + "</br>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Lives: " + lives + "</p>" +
          "<h4>Character Name:</h4>" + "</br>" +
          '<div class="effects">'+ printLtrPlacement + "</div>" + "</br>" +
          "<p>Letters Guessed: " + wrongLetter + "</p>";
  // Injecting the HTML we just created into our div and updating the game information on our page.
  document.querySelector("#game").innerHTML = html;

  if (lives === 0) {
    alert("Game Over!");
    restart();
  }
  else if (lives > 0) {
    var blankSpaceCount = 0;

    for (var i=0; i < ltrPlacement.length; i++) {
      if (ltrPlacement[i] === "_ " || ltrPlacement.length <= 1) {
        blankSpaceCount++;
      }
    }

    if (blankSpaceCount < 1) {
      wins++;
      changeImage();
      alert('You win!');
      restart();
    }
  }
};