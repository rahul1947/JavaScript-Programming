/**
 * Problem 03.1: Drawing a pattern of Squares and Circles
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw31_pattern/5489838119485440 
 */

background(255, 255, 255); // background = white
var side = 20;

// 1. SQUARES
// x=10, padding 10 from left. drawing square each after 30 units.
for(var x=10; x<400; x+=30){
    // similarly y is padded and each square is drawn after 30 units
    for(var y=10; y<400; y+=30){
        // top-left: (x,y) side of square = 20
        rect(x,y,side,side);
    }
}

// 2. CIRCLES
// same loops
for(var x=10; x<400; x+=30){
    for(var y=10; y<400; y+=30){
        // random colors
        fill(random(255), random(255), random(255));
        
        // NOW, center of each circle: (x + side/2, y + side/2)
        ellipse(x+side/2,y+side/2,12,12); //height = width = 12
    }
}
