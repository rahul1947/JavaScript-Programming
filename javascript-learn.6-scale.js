/**
 * Drawing circles using scale
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/scale/6073147293335552 
 */


/*
translate(200, 200);
for (var i = 0; i < 8; i++) {
	fill(random(255), random(255), random(255));
	triangle(10, 10, 30, 60, 90, 60);
	rotate(46);
}
*/ 

strokeWeight(20);
for (var i = 0; i < 64; i++) {
	fill(random(255), random(255), random(255));
	ellipse(400, 400, 200, 100);
	scale(0.9);
}
