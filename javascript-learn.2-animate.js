/**
 * Animate, Rotate and Scale
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/animate-rotate-scale/6003701396701184 
 */

rectMode(CENTER);
var angle = 20;
var i = 0;
var scaleF = 1;

/**
 * A function that continuously is executed.
 */
draw = function() {
    resetMatrix();
    //background(255);
    
    fill(random(255), random(255), random(255) );
    translate(200,200);
    rotate(angle);
    
    scale(scaleF);
    
    //ellipse(0,0,100,400);
    rect(0,0,400,400);
    angle += 20; //change here and see
    
    scaleF *= 0.9;
    i++;
    
    if (i > 20) {
        angle = 10;
        scaleF = 1;
        i=0;
    }
};