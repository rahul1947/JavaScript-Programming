/**
 * Problem 03.2: Drawing a pattern of Squares and Circles 
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw32_pattern/4914598687571968 
 */


rectMode(CENTER); // allows you to draw rectangles from center
// Now, the center for squares and circles would be the same :)
var side  = 20;

// Top-Left Square: 
// center = (paddingX + side/2, paddingY + side/2) = (10+20/2, 10+20/2) = (20,20)

// Similar to previous loops (as in previous solution), but
// (x,y) denotes the center not top-left corner of each square.
for(var x=20; x<400; x+=30){
    for(var y=20; y<400; y+=30){
        // noFill for squares
        noFill();
        rect(x,y,side,side);
        
        // randomly colored circles
        fill(random(255), random(255), random(255));
        ellipse(x,y,12,12); // height = width = 12 
    }
}
