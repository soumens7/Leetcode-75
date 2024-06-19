/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let shouldPush = true;  // Assume the asteroid should be pushed unless a collision dictates otherwise
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            let top = stack.pop();
            if (Math.abs(asteroid) > top) {
                // The current negative asteroid is larger; keep popping the stack
                continue; // Proceed to check the next asteroid in the stack
            } else if (Math.abs(asteroid) === top) {
                // They are the same size and both explode
                shouldPush = false; // Do not push the current asteroid
                break;
            } else {
                // The top asteroid is larger; push it back and do not push the current one
                stack.push(top);
                shouldPush = false;
                break;
            }
        }
        // If no collision has stopped it and conditions are met, push the current asteroid onto the stack
        if (shouldPush) {
            stack.push(asteroid);
        }
    }

    return stack;
};