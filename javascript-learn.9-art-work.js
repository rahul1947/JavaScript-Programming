/**
 * This program draws a line from where the user pressed the mouse to 
 * where ever the user drags the mouse.
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/art-work/5400390998065152 
 */
var x = 0, y = 0;

mousePressed = function() {
	// register the new place where user pressed the mouse.
	x = mouseX;
	y = mouseY;
	stroke(random(255), random(255), random(255));
};
mouseDragged = function() {
	// draw the line from the pressed position to the dragged position
	stroke(random(255), random(255), random(255));
	line(x, y, mouseX, mouseY);
};
