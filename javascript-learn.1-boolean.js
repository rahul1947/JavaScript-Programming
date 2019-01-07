/**
 * Using Boolean
 * 
 * @author Rahul Nalawade
 * 
 * @link https://www.khanacademy.org/computer-programming/boolean/6420515557638144 
 */


/**
 * boolean values are either true or false 
 * if the chest is closed & user clicks on it, 
 *    code should open the chest 
 * if the chest is open & user clicks on it, 
 *    code should close the chest
 * 
 * to help us remember our current state(closed or open), 
 * we use a variable closed that stores the current state(true/false).
 * 
 * closed = true implies that the chest is closed. 
 * closed = false implies that the chest is open
 */


var closed = true; 

// Draw the image at its default size
image(getImage("cute/ChestClosed"), 100, 100);

/**
 * Whenever a mouse is Clicked. Perform following actions
 */
mouseClicked = function(){
    background(255);
    //here we are checking if the value of variable is true
    if (closed) { 
        //control comes here if closed is true
        image(getImage("cute/ChestOpen"), 100, 100);
        closed = false; 
        //now that we opened the chest, we need to remember that
        //so we set the value of closed to be false.
    }else{
        //control comes here if closed is false
        image(getImage("cute/ChestClosed"), 100, 100);
        closed = true; 
        //now that we closed the chest, we need to remember that.
        //so, we set the value of closed = true
    }
};