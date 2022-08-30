var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  
  playSound(userChosenColour);    
  animatePress(userChosenColour);   
  
  checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){

console.log("sucess");
if(userClickedPattern.length=== gamePattern.length){

setTimeout(function(){

nextSequence();


},1000)

}
  } else{

    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function()  {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over,Aperte Qualquer Tecla Para Reiniciar");
  startOver();
  }
}





 function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);



$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(userChosenColour);   

 }
function playSound(name){ var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}