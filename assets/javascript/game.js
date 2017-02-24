//Characters from Studio Ghibli films
var characterNames = [
  "ARRIETTY",
  "HOWL",
  "KIKI",
  "PONYO",
  "TAKENOKO",
  "ASHITAKA",
  "CHIHIRO",
  "HAKU",
  "TOTORO"
];

// Sets up variables
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
    $("#ghibli-image").attr("src", "assets/images/arrietty.jpg");
    $("#image-caption").text("Arrietty from:");
  }
  else if (randomChar === "HOWL") {
    $("#ghibli-image").attr("src", "assets/images/howls.jpg");
    $("#image-caption").text("Howl from:");
  }
  else if (randomChar === "KIKI") {
    $("#ghibli-image").attr("src", "assets/images/kiki.jpg");
    $("#image-caption").text("Kiki from:");
  }
  else if (randomChar === "PONYO") {
    $("#ghibli-image").attr("src", "assets/images/ponyo.jpg");
    $("#image-caption").text("Ponyo from:");
  }
  else if (randomChar === "TAKENOKO") {
    $("#ghibli-image").attr("src", "assets/images/princesskaguya.jpg");
    $("#image-caption").text("Takenoko from:");
  }
  else if (randomChar === "ASHITAKA") {
    $("#ghibli-image").attr("src", "assets/images/princessmononoke.jpeg");
    $("#image-caption").text("Ashitaka from:");
  }
  else if (randomChar === "CHIHIRO") {
    $("#ghibli-image").attr("src", "assets/images/spiritedaway.jpg");
    $("#image-caption").text("Chihiro from:");
  }
  else if (randomChar === "HAKU") {
    $("#ghibli-image").attr("src", "assets/images/spiritedaway.jpg");
    $("#image-caption").text("Haku from:");
  }
  else if (randomChar === "TOTORO") {
    $("#ghibli-image").attr("src", "assets/images/totoro.jpg");
    $("#image-caption").text("Totoro from:");
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

  if (userGuess.match(/[a-z]/i)) {
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
  }

  var wrongLetter = wrongGuess.toString();
  printLtrPlacement = ltrPlacement.join(" ");

  // Creates html
  var html = "<h4>Press any key to start playing!</h4>" + "</br>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Lives: " + lives + "</p>" +
          "<h4>Character Name:</h4>" + "</br>" +
          '<div class="effects">'+ printLtrPlacement + "</div>" + "</br>" +
          "<p>Letters Guessed: " + wrongLetter + "</p>";
  // Injecting the HTML we just created into our div and updating the game information on our page.
  document.querySelector("#game").innerHTML = html;

  // Determines what to do if you win or lose
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