/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let shouldPush = true; // Assume asteroid should be pushed 
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            let top = stack.pop();
            if (Math.abs(asteroid) > top) {
                continue;// proceed to check the next asteroid to pop as current one is greater
            } else if (Math.abs(asteroid) === top) {
                shouldPush = false; // do not push the current asteroid as both wil explode
                break;
            } else {
                stack.push(top); // top asteroid is larger so push it back to stack
                shouldPush = false;
                break;
            }
        }
        // If no collision has stopped it and conditions are met, push the current(positive) asteroid onto the stack
        if (shouldPush) {
            stack.push(asteroid);
        }
    }
    return stack;
};