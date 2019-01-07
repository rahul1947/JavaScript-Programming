/**
 * Problem 07 - Make it Rain project extension. 
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw7_project-make-it-rain/5891032207228928 
 */

// Array for initial drop positions
var xPositions = [200];
var yPositions = [0];

// Array for color of initial drop
var cRed = [137];
var cGreen = [228];
var cBlue = [246];

// Array to check if we clicked at 'i'th drop or not
var clicked = [false];

// executed multiple times
draw = function() {
    
    mouseClicked = function() {
        // when mouse was clicked
        clicked.push(true);
        
        // adding new drops for each mouse click
        xPositions.push(-100 + random(500)); // adding -100 as there is x velocity
        yPositions.push(0); // starting from the top
        
        // each newly added drop by a click has WHITE color 
        cRed.push(255);
        cGreen.push(255);
        cBlue.push(255);
        
    };
    // when mouse was not clicked
    clicked.push(false);
    
    // adding some more new drops 
    xPositions.push(-100 + random(500)); // -100 as offset for the horizontal wind
    yPositions.push(0); // starting every drop from the top
    
    // each newly added drop has their random color    
    cRed.push(random(70));
    cGreen.push(random(70));
    cBlue.push(random(70));
    
    // background color: erases the previous position of drops
    background(248, 248, 248);
    
    // for drawing drops in the frame
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        
        // filling drop with their own color, a random shade of light blue
        fill(100 + cRed[i], 190 + cGreen[i], 210 + cBlue[i]);
        
        // if mouse was clicked
        if (clicked[i]) {
            // drawing an avatar :), instead of a white drop
            image(getImage("avatars/duskpin-seed"), xPositions[i], yPositions[i], 30, 30);
        }
        // if mouse was not clicked
        else {
            // drawing the 'i'th elliptical drop 
            ellipse(xPositions[i], yPositions[i], 5, 10);
        }
        
        yPositions[i] += 8; // vertical velocity
        xPositions[i] += 2; // horizontal velocity {if there's a wind ;)}
    }
};