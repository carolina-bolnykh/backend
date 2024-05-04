var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

alert("hello");
$("h1").css("color", "pink");
nextSequence();

function nextSequence() {
    var randomNumber = Math.random();
    randomNumber *= 3;
    randomNumber += 1
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
audio.play();