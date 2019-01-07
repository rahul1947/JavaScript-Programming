/**
 * Problem 06.4 - Balloon-tile catching game. 
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw64_ballon_tile/6248304209985536 
 */

// Restarting the Game
mouseClicked = function() {
    Program.restart();
};

var ySpeed = 5;
var yPos = 420;
var chosenX = [random(40,360)];
var i = 0;
var gFill = [random(50,255)];
var score = 0;

// Generates Balloon at xPos
var balloon = function(xPos) {
    fill(gFill[i],100,200);
    ellipse(xPos,yPos,40,60);
};

// Simulates the Balloon-Tile Game
draw = function() {
    background(255, 255, 255);
    
    // balloon
    balloon(chosenX[i]);
    fill(115, 60, 13);
    strokeWeight(2);
    
    // bucket (instead of Tile) :)
    quad(mouseX-25,0,mouseX+25,0,mouseX+30,40,mouseX-30,40);
    fill(46, 24, 6);
    ellipse(mouseX,40,60,6);
    
    yPos -= ySpeed;
    
    // When there is a hit
    if(dist(chosenX[i],yPos,mouseX,20)<30) {
        chosenX.push (random(40,360));
        gFill.push(random(0,255));
        i++;
        yPos=420;
        score++;
        ySpeed+=0.5;
    }
    
    // printing text on the bucket
    strokeWeight(1.5);
    fill(255, 255, 255);
    text("SCORE", mouseX-20, 15); 
    text(score, mouseX-5, 30);
};
