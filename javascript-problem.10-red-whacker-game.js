/**
 * Problem 10: Red Whacker Game as an extension of Problem 09
 * 
 * Finish the red whacker game as described below: 
 * game has to run for 20 seconds. If user clicks correctly on red, 
 * increase the score. Every 3 seconds once or whenever the user clicks 
 * correctly on red, move red to a random position in the board. 
 * 
 * Display score at the end of the game. 
 * 
 * NOTE: 
 * this is similar to whack-a-mole game (common childhood game/arcade 
 * game) - here instead of a mole, we have a red square. 
 * 
 * This is the next stage of hw9. 
 * Hw10 is the main goal; as I did not want to give such big game to do 
 * on your own - I broke down into 2 stages 
 * 
 * hw9 is the first stage ( at least be able to move the red square using 
 * arrows) - solution has been posted as  hw9_solution_Move_Red_with_arrow_keys  
 * Hw10 is the final stage where you need to process user’s clicks, 
 * move red square randomly – while doing all this, maintain a score & a timer.
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw10_red_whacker_game/6547725186924544 
 */

var startTime = millis();
var endTime = millis() + 20000; //game runs for 20 secs
var currentTime=0, elapsedTime=0;
var score = 0;

var numSquaresPerRow = 10; 
var rectWidth = 400/numSquaresPerRow; //approx 100
var r = 0;
var currentRedRow=0, currentRedCol=0;
var currentColor=0;

var colors= []; //array to store the colors
for(var i=0;i<numSquaresPerRow;i++){
    var single=[];
    for(var j=0;j<numSquaresPerRow;j++){
        //create no-red based colors
        single.push( color(0, random(255), random(255) ));
    }
    colors.push( single );
}

//create the grid and fill in the colors from colors array
for(var i=0; i<numSquaresPerRow; i++){
    for(var j=0; j<numSquaresPerRow; j++){ 
        fill(colors[i][j]);
        rect(i*rectWidth,j*rectWidth, rectWidth,rectWidth);
    }
} 

//function that fills previous color in the current red square
var changePosition = function(){
    //fill in previous color
    fill( currentColor );
    rect(currentRedCol*rectWidth, currentRedRow*rectWidth, rectWidth, rectWidth);
    //move red to a random row/col
    currentRedRow = floor( random(numSquaresPerRow) );
    currentRedCol = floor( random(numSquaresPerRow) );
    currentColor = colors[currentRedRow][currentRedCol];
    fill(255, 0, 0);
    rect(currentRedCol*rectWidth, currentRedRow*rectWidth, rectWidth, rectWidth);
};


changePosition(); //call it for the first time
startTime = millis(); //start the timer

draw = function() {
    currentTime = millis(); //check the current time of draw
    if(endTime < currentTime){ 
        //game time ends
        println("Your score :" + score);
        noLoop();
    }
    //if NOT end time, then check if 3 secs has passed
    elapsedTime = currentTime - startTime;
    if(elapsedTime > 3000){ 
        //3 secs passed - so move the red
        changePosition(); 
        startTime = millis();
    }
};
mouseClicked = function(){ 
    var clickedCol = floor(mouseX/rectWidth); 
    var clickedRow = floor(mouseY/rectWidth);
    //(clickedCol + " " + currentRedCol);
    //check if red is in user clicked cell
    if( clickedCol===currentRedCol && clickedRow===currentRedRow ){
            score++;
            startTime = millis();
            changePosition();
    }    
};