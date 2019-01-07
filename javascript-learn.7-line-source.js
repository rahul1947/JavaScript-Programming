/**
 * Program using arrays. Draw lines originating from the first 
 * point clicked (source). Keep on adding the points in an array 
 * to draw lines form the source to the points in the array.
 * 
 * On Right click, make it bold.
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/lines-from-source/5342677005926400 
 */

var x = [];
var y = [];
mouseClicked = function() {
	if (mouseButton === LEFT) {
		x.push(mouseX);
		y.push(mouseY);
	}
	if (mouseButton === RIGHT) {
		strokeWeight(10);
		for (var i = 0; i < x.length; i++) {
			point(x[i], y[i]);

		}
	}
	for (var i = 0; i < x.length; i++) {
		line(x[0], y[0], x[i], y[i]);
	}
};
