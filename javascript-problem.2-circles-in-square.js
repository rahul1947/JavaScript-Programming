/**
 * Problem 02: Create a pattern that contains 4 Squares and 6 concentric Circles
 * in the center
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw02_circles-in-square/5564558170554368 
 */


// var x=(start); x<(ending value); x+=(how much it skips)
for (var x = 10; x < 380; x += 190) { // squares
	for (var z = 10; z < 380; z += 190) {
		rect(x, z, 190, 190);
	}
}

for (var dia = 100; dia > 10; dia -= 15) { // circles
	ellipse(200, 200, dia, dia);
}
