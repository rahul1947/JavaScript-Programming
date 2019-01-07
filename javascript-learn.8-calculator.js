/**
 * Calculator with Simple Arithmetic.
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/calculator/4728082587353088 
 */

var numSquaresPerRow = 5; 
var rectWidth = 400/numSquaresPerRow;

// text to show in the buttons
// as well as to get the values for computation
var board = [
    [1,2,3,4,5],
    [6,7,8,9,0],
    ["+","-","*","/","="]
    ];
    
var operator = "";
var operand1=0, operand2=0, result=0;
var textSoFar = ""; // the string which is going to be shown to the user
var resultShown = false; // boolean flag to indicate whether prior operations
							// have been done

// build the grid
for(var x=0; x<400; x+=rectWidth){
    for(var y=0; y<200; y+=rectWidth){
        fill(184, 180, 180);
        rect(x,y,rectWidth,rectWidth);
    }
}

// show the text in the buttons
var center = rectWidth/2;
for( var i=0; i<3; i++){
    for(var j=0; j<5; j++){ 
        fill(255, 0, 0);
        text(board[i][j], rectWidth*j+center, rectWidth*i+center);
    }
}

var mouseClicked = function(){
    var clickedCol = floor(mouseX/rectWidth); // 0,1,2,3,4
    var clickedRow = floor(mouseY/rectWidth); // 0,1,2,3,4
    
    // valid values col = 0,1,2,3,4
    // valid value row = 0,1,2
    if( clickedRow > 2){
        // user clicked in the non-button area reserved to show what was pressed
		// - we do not need to proceed
        return;
    }
    if(clickedRow < 2) { 
        // number has been clicked
        // so get the numerical value
        // as numbers join at the right end, to get the actual numerical value
        // multiply the existing value by 10 and then add the newly clicked
		// number
        if(resultShown === true) {
            // println("Inside result shown true");
            // prior operation done; it's result was shown - so now we can clear
			// it up
            operand1 = 0;
            operand2 = 0;
            operator = "";
            result = 0;
            textSoFar = "";
            resultShown = false;
        }
        if(operator === "" ) {
            // no operator clicked as of now
            operand1 = operand1 * 10 + board[clickedRow][clickedCol];
            textSoFar = operand1;
        }
        // operator has been clicked already which means now user is
        // clicking on digits for operand2
        else {		
            operand2 = operand2 * 10 + board[clickedRow][clickedCol];
            textSoFar = textSoFar + operand2;
        }
    }
    if( clickedRow === 2 ) { 
        // clicking has happened in operator row
        if(clickedCol === 4) { 
            // equal to sign has been pressed
            // which means it is time to compute the result
            if(operator==='+') {
             result = operand1 + operand2;   
            }
            if(operator==='-') {
             result = operand1 - operand2;   
            }
            if(operator==='*') {
             result = operand1 * operand2;   
            }
            if(operator==='/') {
             result = operand1 / operand2;   
            }
            textSoFar = textSoFar + " = " + result;
            resultShown = true;
        }
        // one of the mathematical operators have been pressed
        else {
        operator = board[clickedRow][clickedCol];
        textSoFar = textSoFar + " " + operator + " ";
        }
    }
    fill(255,255,255);
    rect(0, rectWidth*3, 400, rectWidth*4);
    fill(255, 0, 0);
    text(textSoFar, 200, 300 );
};