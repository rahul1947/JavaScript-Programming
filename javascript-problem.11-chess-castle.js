/**
 * Problem 11: 
 * Consider the chess board 8x8 configuration & only the movement of Castle 
 * (HINT - Castle moves only horizontally or vertically). 
 * 
 * Assume a 2-dimensional array board[][] has been declared and it keeps track 
 * of our Castle pieces  - a value 1 means our Castle is in that cell - which 
 * means there will be only 2 cells in the array that have a 1 for each of out castles. 
 * 
 * Write a function that takes enemy's pawn position as input arguments - determine 
 * whether we can capture it. 
 * 
 * return true if enemy's pawn position (row, column) can be captured. 
 * var capturePawn = function(row, column) {...}
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/hw11_castle-chess/5976367218196480 
 */

var grid = [ 
	[ 0, 0, 0, 0, 0, 0, 0, 0 ], 
	[ 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0 ], 
	[ 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0 ], 
	[ 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0 ], 
	[ 0, 0, 0, 0, 0, 0, 0, 0 ], ];

var cxPos = 0, cyPos = 0;
var pawnNum = 5;
var pawnX = [], pawnY = [];

for (var i = 0; i <= 350; i += 100) {
	for (var j = 0; j <= 400; j += 100) {
		fill(0, 0, 0);
		rect(i, j, 50, 50);
		for (var w = 50; w <= 400; w += 100) {
			rect(w, j - 50, 50, 50);
		}
	}
}
for (var pawnInit = 0; pawnInit < pawnNum; pawnInit++) {
	var xIn = floor(random(0, 7));
	var yIn = floor(random(0, 7));
	pawnX.push(xIn);
	pawnY.push(yIn);
	grid[yIn][xIn] = 2;
	image(getImage("avatars/piceratops-seed"), pawnX[pawnInit] * 50,
			pawnY[pawnInit] * 50, 50, 50);
}

image(getImage("cute/WallBlockTall"), 0, 0, 50, 50);
image(getImage("cute/WallBlockTall"), 350, 0, 50, 50);

var colTotal = 0;
var colTotal2 = 0;
var rowTotal = 0;
for (var i = 0; i < 8; i++) {
	colTotal += grid[i][0];
	colTotal2 += grid[i][7];
	rowTotal += grid[0][i];
	if (colTotal >= 2 || rowTotal >= 2 || colTotal2 >= 2) {
		fill(255, 255, 255);
		rect(75, 325, 250, 100);
		textSize(30);
		fill(0, 0, 0);
		text("Capture it!", 128, 376);
		noLoop();
	}
}
