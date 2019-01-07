/**
 * Objective: 
 * when user clicks left button, store coordinates of mouse in x & y arrays 
 * when user clicks right mouse button, 
 *    1. put a point at the previously clicked points.
 *    2. draw a line from first point to all other points
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/arrays/4539897018220544 
 */


var x = [];
var y = [];

mouseClicked = function(){ 
    if( mouseButton === LEFT){
        //storing coordinates of mouse clicked places into the respective arrays
        x.push( mouseX );
        y.push( mouseY );
    }
    if( mouseButton === RIGHT){
        //show the points
        strokeWeight(5);
        for(var i=0; i<x.length; i++){
            point(x[i], y[i]);
        }
        //line needs to be drawn from first point to all other subsequent points
        //a line needs 2 sets of co-ordintes
        //index of the first element in an array is always 0.
        //so x[0] & y[0] become the first coordinates of the line
        //to get all other points one by one, we can go through the loop
        for(var i=1;i<x.length; i++){ 
            //draw line from first point to all other points
            line(x[0], y[0], x[i], y[i]);
        }
    }
};
