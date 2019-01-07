/**
 *  06.1a - Randomly placing 50% of leaves as green
 *  
 *  @author Rahul Nalawade
 *  
 *  @link https://www.khanacademy.org/computer-programming/hw61b_greenleavesonly/6694985963569152 
 */

// two loops for two dimensions
for (var i=0; i<10; i++) {
    for(var j=0; j<10; j++) {
        
        // generates a random number between 0 and 1.
        var r = random(0,1);
        if(r < 0.5) { 
            image(getImage("avatars/leaf-green"), i*40, j*40, 40, 40); 
        }
        // else do nothing :)
        // else { image(getImage("avatars/leaf-yellow"), i*40, j*40, 40, 40); }
    }
}
