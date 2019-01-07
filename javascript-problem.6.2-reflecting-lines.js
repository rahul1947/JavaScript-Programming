/**
 * Problem 06.2 - Code to draw like given sketch as close as possible 
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw62_reflectinglines/4613704941469696 
 */

// Solution 1: using triangles
// after 8 hops of 20 it should be 200 = (100+300)/2. 
var x = 40; // hence, x = 40 (starting x)

for (var i = 0; i < 17; i++) {
    noFill();
    // (x1Bottom, y1Bottom, x2Bottom, y2Bottom, x, 100)
    triangle(100,300, 300, 300, x, 100);
    x += 20;
}

//---------------------------------------------------------------------
/*
// Solution 2: using lines
var x1 = 100, y1 = 300; // p1: Bottom left point
var x2 = 300, y2 = 300; // p2: Bottom right point

line(x1, y1, x2, y2); // Bottom line

// topMidPoint is x coordinate of mid-point of p1 and p2
var topMidPoint = (x1 + x2) / 2, yTop = 100;

// Middle top point forming first triangle
line(x1, y1, topMidPoint, yTop);
line(x2, y2, topMidPoint, yTop);

// for 8 points before and after topMidPoint each
for(var i=1; i<9; i++) {
    
    var difference = 20*i; // disance from the topMidPoint
    
    // Right two lines from p1 and p2
    line(x1, y1, topMidPoint + difference, yTop);
    line(x2, y2, topMidPoint + difference, yTop);
    
    // Left two lines from p1 and p2
    line(x1, y1, topMidPoint - difference, yTop);
    line(x2, y2, topMidPoint - difference, yTop);
}
*/
