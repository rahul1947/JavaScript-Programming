/**
 * Problem 08: 
 * When left mouse is dragged - draws a rectangle
 * When right mouse is dragged - draws an ellipse
 * WITHOUT ANY DRAG LINES** 
 * 
 * Stores all the previously drawn figure in an array.
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw08_left-rectangle-right-ellipse/6690942670503936 
 */

var StartX = [], StartY = [], x1 = [], y1 = [], x2 = [], y2 = [];
var shapeColor = [], shapeColors = [];
var currentShape = [], shapes = [];
rectMode(CORNERS);
ellipseMode(CORNERS);

mousePressed = function() {
	shapeColor = color(random(255), random(255), random(255));
	StartX = mouseX;
	StartY = mouseY;
	if (mouseButton === LEFT) {
		currentShape = 1;
	}
	if (mouseButton === RIGHT) {
		currentShape = 2;
	}
};
mouseDragged = function() {
	background(255); // Clears drag lines & old rectangle
	for (var i = 0; i < x1.length; i++) {

		if (shapes[i] === 1) {
			fill(shapeColors[i]);
			rect(x1[i], y1[i], x2[i], y2[i]);
		}
		if (shapes[i] === 2) {
			fill(shapeColors[i]);
			ellipse(x1[i], y1[i], x2[i], y2[i]);
		}
	}
	if (currentShape === 1) {
		fill(shapeColor);
		rect(StartX, StartY, mouseX, mouseY);
	}
	if (currentShape === 2) {
		fill(shapeColor);
		ellipse(StartX, StartY, mouseX, mouseY);
	}

	mouseReleased = function() {
		x1.push(StartX);
		y1.push(StartY);
		x2.push(mouseX);
		y2.push(mouseY);
		shapes.push(currentShape);
		shapeColors.push(shapeColor);
		fill(shapeColor);
	};
};