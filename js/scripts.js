//Business Logic
//Constructor function for a player
function Player(name, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}

//Function to disable and enable gaming areas according to which player is active.
function activeUser() {
}

//Funtion on what is to happen when the dice is rolled.
Player.prototype.diceRoll = function () {
  var randomNo = Math.floor((Math.random() * 6) + 1); 
  if (this.diceRoll === 1) {
    this.turnTotal = 0;
    alert("Sorry! You've rolled a 1...your turn is over. Pass the mouse to the next player.")
  } else {
    this.turnTotal += this.roll;
  }
  }

//Function on what is to happen when a player holds the game.
// Player.prototype.hold = function () {
//   activeUser();
//   this.overallscore +=100 this.turnTotal;
//   if (this.overallScore >=100) {
//     alert("Game Over. You Win!!!");
//     resetFields();
//     alert('To play again, click New Game')
//   } else {
//     return false;
//   }
//   console.log('if the turn total is: ' + this.turnTotal);
//   return this.overallScore;
// };

//Function to reset the form input fields, re-enable the buttons, reset the scores to 0.
function resetFields() {
}

//User Interface Logic

//Global Variables
//var player1, player2;
// let player1 = new Player (player1Name, true)
// let player2 = new Player (player2Name, false)

$(document).ready(function() {
//function for name submission
  $("form#playerNameInputForm").submit(function(event) {
    event.preventDefault();
    const player1Name = $("input#player1NameInput").val();
    const player2Name = $("input#player2NameInput").val();
    console.log("player1Name: " + player1Name);
    console.log("player2Name: " + player2Name);
    player1 = new Player (player1Name, true);
    player2 = new Player (player2Name, false);
    $("#player1NameOutput").text(player1Name);
    $("#player2NameOutput").text(player2Name);
    $("button.player1-buttons").show();
    $("#playerNameInputForm").hide();
    $("#playerNameInputForm").trigger("reset");
  });
});