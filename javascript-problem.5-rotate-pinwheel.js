/**
 * Problem 05: Rotating a Pin Wheel, with gradual change in it's color
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/spin-off-of-hw5_rotatepinwheel/4545606349651968 
 */


var r = random(255), g = random(255), b = random(255); // initial color
var rdelta = 0, gdelta = 0, bdelta = 0; // for GRADUAL change of colors
var angle = 0; // For rotating Pin-Wheel we need to update this

//called repeatedly during program execution
draw = function() {
    background(255); 
    
    var blades = 9; // can change no of blades in your pin wheel
    var beta = 360/blades; // angle between adjacent blades
    
    // draws pin wheel with 'blades' no of panes.
    for (var i=0; i<blades; i++) {
        
        translate(200,200); // move to center
        rotate(angle); // rotate for new blade
        
        fill(r, g, b); // color of the blade
        triangle(20,40,10,10,100,40); // drawing the 'i'th blade
        
        angle += (beta); // for each new next blade
        resetMatrix(); // disregard previous transformations
    }
    
    var spin = 2; // speed of rotation of spin wheel. spin = (0 to beta) recommended
    angle = (angle + spin) % 360; //rotation, (can  skip the % 360 part)
    
    // randomizing gradual change
    rdelta = random(-5, 5); gdelta = random(-5, 5); bdelta = random(-5, 5);
    
    // updating colors with the above change
    r = r + rdelta; g = g + gdelta; b = b + bdelta;
};