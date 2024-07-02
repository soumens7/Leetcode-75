/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let radiant = [], dire = []; // initialize queues

    // Initialize the queues with indices of each senator
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }
    // removing(ban) senator from party according to order
    while (radiant.length > 0 && dire.length > 0) {
        let Rindex = radiant.shift(), Dindex = dire.shift();// radiant.shift() = radiant[0], dire.shift() = dire[0]
        // whichever index comes first gets to ban other
        if (Rindex < Dindex) {
            radiant.push(Rindex + senate.length)// Radiant bans a Dire and gets added to the end of the senate list for next round
        } else {
            dire.push(Dindex + senate.length) //Dire bans a Radiant and gets added to the end of the senate list for next round
        }
    }
    return radiant.length > 0 ? "Radiant" : "Dire";
};
