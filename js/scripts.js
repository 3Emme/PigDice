//Global Variables
var player1, player2;
//Business Logic
//Constructor function for a player
function Player(name, turnTotal, diceRoll, overallScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}

//Function to disable and enable gaming areas according to which player is active.
function activeUser() {