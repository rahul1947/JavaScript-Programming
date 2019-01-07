/**
 * Problem 06.3 - Circles distributed in n x n square, without overlapping
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw63_circlesdistributedinsquare/5357284121280512 
 */

var n = 10; // CHANGE as you want

var dia = 50; // default diameter

// When we cannot accomodate default sized circles
if (n * dia >= 400) {
    dia = 400/n; // Shrinking diameter
}

// distance between centers of two adjacent circles  
var distance = (400 - (n * dia)) / (n+1); 
// center of Circles 
var xCenter = distance, yCenter = distance;
        
// For iterating over j: Vertical circles, and i: Horizontal circles, n times each
for(var i=0; i<n; i++) {
    for(var j=0; j<n; j++) {
        
        ellipseMode(CORNER);
        fill(random(255), random(255), random(255));
        ellipse(xCenter, yCenter, dia, dia);
        
        yCenter = yCenter + dia + distance; // updating the yCenter
    }
    xCenter = xCenter + dia + distance; // updating the xCenter
    yCenter = distance; // re-initializing to distance
}
