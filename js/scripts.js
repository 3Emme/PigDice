//Business Logic
//Constructor function for a player
function Player(name) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
}

//Function to disable and enable gaming areas according to which player is active.

//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
  var randomNo = Math.floor((Math.random() * 6) + 1); 
  this.diceRoll = randomNo;
  console.log("dice rolled! Roll: " + this.diceRoll);
  if (this.diceRoll === 1) {
    this.turnTotal = 0;
    // alert("Sorry! You've rolled a 1...your turn is over. Pass the mouse to the next player.")
    // hide show stuff
  } else {
    console.log("My turn total first is: " + this.turnTotal)
    console.log("My diceroll is: " + this.diceRoll)
    this.turnTotal += this.diceRoll;
    console.log("My turn total then is: " + this.turnTotal)
    }
  }

//Function on what is to happen when a player holds the game.
// Player.prototype.hold = function () {
//   this.overallScore +=100 this.turnTotal;
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
let player1 = new Player ()
let player2 = new Player ()

$(document).ready(function() {
//function for name submission
  $("form#playerNameInputForm").submit(function(event) {
    event.preventDefault();
    const player1Name = $("input#player1NameInput").val();
    const player2Name = $("input#player2NameInput").val();
    console.log("player1Name: " + player1Name);
    console.log("player2Name: " + player2Name);
    player1 = new Player (player1Name);
    player2 = new Player (player2Name);
    $("#player1NameOutput").text(player1Name);
    $("#player2NameOutput").text(player2Name);
    $("button.player1-buttons").show();
    $("#playerNameInputForm").hide();
    $("#playerNameInputForm").trigger("reset");
  });

  $("#player1-roll").click(function(event) {
    event.preventDefault();
    let player1TurnTotalSection = $("#player1TurnTotalSection");
    let player1DiceRollSection = $("#player1DiceRollSection");
    //let turnTotal = player1.diceRoll();
    //console.log("turnTotal: " + turnTotal);
    player1.roll(Object.values(player1));
    console.log("dice roll clicked!");
    player1TurnTotalSection.text(player1.turnTotal);
    player1DiceRollSection.text(player1.diceRoll);
    if (player1.turnTotal == 0){
      alert("Sorry! You've rolled a 1...your turn is over. Pass the mouse to the next player.");
      $("button.player1-buttons").toggle();
      $("button.player2-buttons").toggle();
    }
  });

    $("#player2-roll").click(function(event) {
      event.preventDefault();
      let player2TurnTotalSection = $("#player2TurnTotalSection");
      let player2DiceRollSection = $("#player2DiceRollSection");
      //let turnTotal = player1.diceRoll();
      //console.log("turnTotal: " + turnTotal);
      player2.roll(Object.values(player2));
      console.log("dice roll clicked!");
      player2TurnTotalSection.text(player2.turnTotal);
      player2DiceRollSection.text(player2.diceRoll);
      if (player2.turnTotal == 0){
        alert("Sorry! You've rolled a 1...your turn is over. Pass the mouse to the next player.");
        $("button.player2-buttons").toggle();
        $("button.player1-buttons").toggle();
      }  
    });
  });

    // let contactsList = $("ul#contacts");
    // let htmlForContactInfo = "";
    // addressBookToDisplay.contacts.forEach(function(contact) {
    //   htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
    // });
    // contactsList.html(htmlForContactInfo);

  // $("button#player1-roll").click(function(event){
  //   player1.roll = throwdice();
  //   $("#die-roll-1").text(player1.roll);
  //   player1.rollone();
  //   $("#round-total-1").text(player1.tempscore);
  // });