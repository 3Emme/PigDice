# Pig Dice

### _Webpage that uses objects and constructors to emulate a Pig Dice game, 26 August 2020_

#### By _**Cameron Will <cellardoorsolar@aol.com>, Emme Buentiempo <emmettbuentiempo@gmail.com>**_

# Description

_This is a simple webpage project to practice using constructors and prototypes to populate and display an address book._

## Specs for Program Behaviors
1. **Take input from user for player 1 and player 2 names, and when submitted, append to each player's scorecard and display player 1 button group.**
### Input: "Emme" "Cameron" *click submit*
### Output: *Display player 1 name on player 1 scorecard* *Display player 2 name on player 2 scorecard* *Display player 1 button group*

2. **When player 1 clicks player 1 roll button, turn function is activated, dice pulls random number from 1-6, and appends result on player 1's scorecard under turnTotal section.**
### Input: *Click* "Roll" button
### Output: player1.roll = 3. player1.turnTotal = 3. player1.overallScore = 0.

3. **If dice value is 1, transform value of player1 turn total to 0. If rolled dice value is greater than 1, then rolled dice value is added to player1 turn total and appends result on player 1's scorecard under turnTotal section.**
### Input: *Click roll button* *roll = 5* *Click roll button* *roll = 1*
### Output: turnTotal = 0

4. **After every dice roll, check value of player1 turn total. If value is 0, make no adjustments to player 1 score and return out of the turn function for player 1, clearing the turn total section**
### Input: *Click roll button* *roll = 5* *Click roll button* *roll = 1*
### Output: player1.overallScore = 0

5. **When hold button is clicked, add the value of player1's turn total to player 1 score, transform value of player1 turn total to 0, and return out of the turn function for player 1, hiding the player 1 button group and displaying the player 2 button group. Player 1's overall score section is updated to display the current value of player1.overallScore**
### Input: *Click roll button* *roll = 5* *Click hold button*
### Output: player1.overallScore = 5, *end turn function* *show player2 button group*

6. **Expand specs 1-5 for player 2, when clicking player 2 roll and hold button. Adjust player 2 score accordingly, and when turn is over hide player 2 button group and display player 1 button group again.**
### Input: Roll
### Output: 

7. **When either player's overall score reaches >= 100, an alert will declare a winner and reset button will display.**
### Input: player1.overallScore = 99, *Click roll button* *roll = 5* *Click hold button*
### Output: player1.overallScore = 104, *alert: "Congrats, Emme won!"* display reset button *Play again!*

7. **When reset button is clicked, page refreshes to player name entry, and values of player1 and player2 objects reset to original values.**
### Input: *Click Reset Button*
### Output: *page returns to original state*


## Setup/Installation Requirements

* _open terminal_
* _type "cd desktop", then press enter_
* _type "git clone https://github.com/solardor/pigdice", then press enter_
* _locate and open folder on desktop named "pigdice"_
* _open the file named "index.html"_

## Known Bugs

_No known bugs at this time_

## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery

### License

Copyright (c) 2020 **_Cameron Will and Emme Buentiempo_**
