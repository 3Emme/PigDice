//Global Variables
//var player1, player2;
let player1 = new Player ("Player 1", true)
let player2 = new Player ("Player 2", false)
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
Player.prototype.hold = function () {
}

//Function to reset the form input fields, re-enable the buttons, reset the scores to 0.
function resetFields() {
}