/**
 * Animation: Translate
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/animation-translate/4663847056474112 
 */

var i = 0;

draw = function() {
	resetMatrix();
	translate(20 * i, 20 * i);
	fill(random(255), random(255), random(255));
	rect(0, 0, 20, 20); // drawing a rectangle
	i++;

	resetMatrix();
	fill(random(255), random(255), random(255));
	translate(-20 * i, 20 * i); // translation
	rect(380, 0, 20, 20);
	
	// re-initialization of 'i'
	if (i >= 20) {
		i = 0;
	}
};