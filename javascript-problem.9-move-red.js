/**
 * Problem 09: Moving Red Square based on Arrow keys
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw9_move_red_with_arrow_keys/6226126239858688
 */

var n= 8; // number of squares per row or column 
var side = 400 / n; // approx 100
var colors= []; // similar to baord in tic-tac-toe

for(var i = 0; i < n; i++) {
    var greenColors=[]; // allocate space for an array
    for(var j = 0; j < n; j++) {
        // create no-red based colors
        var greenShade = color(0, random(255), random(255)); 
        greenColors.push(greenShade);
    }
    // at this point, single has an array of colors that correspond to one column
    colors.push(greenColors); //we push that info into main storage 
}

// draw the rectangles & fill the cells with their corresponding color
for(var i = 0; i < n; i++) { 
    for(var j = 0; j < n; j++) { 
        fill(colors[i][j]);
        rect(i*side, j*side, side, side);
    }
}

// initial position - red is positioned in the center of canvas
// these variables indicate the current position of red

var redCol = n/2, redRow = n/2; 
fill(255, 0, 0);
rect(redRow*side, redRow*side, side, side);

//Write code to move the red square whenever the keyboard up, down, right, left arrows are pressed - update the redRow/redCol for that.

//Whenever the red leaves a cell, the cell should be filled with it's original color - colors arrays has that info.

//START YOUR CODE FROM HERE 
//USE VARIABLES PROVIDED
keyPressed = function(){ 
    //before we lose track of values in redRow, redCol -
    //use the values to retrieve that cell's color from colors array
    fill(colors[redCol][redRow]);
    rect(redCol*side, redRow*side, side, side);
    
    //added the checking to keep red inside canvas
    //this was not asked - but wanted to show how it could be done
    
    if((keyCode === LEFT) && redCol > 0){ 
        redCol = redCol - 1;
    }
    if((keyCode === RIGHT) && redCol < (n-1)){ 
        redCol = redCol + 1;
    }
    if((keyCode === UP) && redRow > 0){ 
        redRow = redRow - 1;
    }
    if((keyCode === DOWN) && redRow < (n-1)){ 
        redRow = redRow + 1;
    }
    
    fill(255, 0, 0);
    rect(redCol*side, redRow*side, side, side);
};