/**
 * Problem 12: Start with 100 randomly placed small circles in the canvas area.
 * Then, use draw() to get rid of each circle with 1% probability. After getting
 * rid of one or more circles within draw(), redraw all the remaining circles.
 * Since draw() is invoked again & again, eventually all circles will be gone.
 * 
 * HINT: Maintain 2 arrays X, Y of length 100 - push random values into them &
 * draw circles based on those numbers.
 * 
 * Logic for removing a circle with 1% probability - refer to placing
 * green/yellow leaves in review test1.
 * 
 * Removing a circle means in this scenario, make the value of x & y of that
 * circle as -100.
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw12_vanishing-circles/4949129152593920 
 */

// Solution 01:
var xPos = [], yPos = [];
fill(255, 0, 0);

draw = function() {
	background(241, 248, 240);
	// drawing circles
	for (var i = 0; i <= 100; i++) {
		xPos.push(round(random(10, 380)));
		yPos.push(round(random(10, 380)));
		fill(143, 128, 220);
		ellipse(xPos[i], yPos[i], 20, 20);

	}

	for (var i = 0; i <= 100; i++) {
		var rand = random(0, 100); // probability factor

		// when 1 % probability
		if (rand < 1) {
			xPos[i] = -100; // virtually delete the circle
			yPos[i] = -100; // virtually delete the circle
		}
	}
};

/*
// Solution 02:
var x = [];
var y = [];
var numCircle = 100;
var circle = function() {
	for (var i = 0; i < numCircle; i++) {
		var rX = random(0, 400);
		var rY = random(0, 400);
		x.push(rX);
		y.push(rY);
		fill(143, 128, 220);
		ellipse(rX, rY, 10, 10);
	}
};

draw = function() {
	background(228, 246, 194);
	for (var i = 0; i < numCircle; i++) {
		var remove = floor(random(0, 100));
		if (remove === 1) {
			x[i] = -100;
			y[i] = -100;
		}
		ellipse(x[i], y[i], 10, 10);
	}
};

circle();
*/