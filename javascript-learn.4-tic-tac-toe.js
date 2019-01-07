/**
 * Tic-Tac-Toe Game in javascript
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/tic-tac-toe/6425075068076032 
 */

//n*n square matrix
//here n is being represented by numSquaresPerRow

var numSquaresPerRow = 3; 
var rectWidth = 400/numSquaresPerRow; //approx 100
var whoseTurn = 1;

var board= [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ];

for(var x=0; x<400; x+=rectWidth){
    for(var y=0; y<400; y+=rectWidth){
        //fill(random(255), random(255), random(255));
        rect(x,y,rectWidth,rectWidth);
    }
}

var image1 = getImage("avatars/marcimus-red");
var image2 = getImage("avatars/mr-pink-green");


mouseClicked = function(){
    var clickedCol = floor(mouseX/rectWidth); //0,1,2
    var clickedRow = floor(mouseY/rectWidth); //0,1,2
    
    if(board[clickedCol][clickedRow] ===0){
        if( whoseTurn === 1){
            image(image1, clickedCol*rectWidth, clickedRow*rectWidth);
            board[clickedCol][clickedRow] = 1;
            whoseTurn = 2;
        }else{
            image(image2, clickedCol*rectWidth, clickedRow*rectWidth);
            board[clickedCol][clickedRow] = 2;
            whoseTurn = 1;
        }
    }
    
};