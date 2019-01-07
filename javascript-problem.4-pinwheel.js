/**
 * Problem 04: Pin Wheel
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw4_pinwheel/5755373801472000 
 */

translate(200,200); // in the center

var n = 8; // no of triangles you need to show (n <= 20)

// will iterate for 20 times
for(var i = 0; i<20; i++){
    
    fill(random(255),random(255),random(255)); // random fill
    
    triangle(20,40,10,10,100,40); // a triangle drawn
    
    rotate(360/n); // rotate according to n you want :)
}