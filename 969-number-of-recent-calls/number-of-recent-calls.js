
var RecentCounter = function () {
    this.requests = []; // queue to store timestamps of the pings
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.requests.push(t); // Add the new ping time to the requests array

    // Loop to remove all pings from the requests array that are outside the 3000 ms window from the current ping time
    while (this.requests[0] < t - 3000) { // Ex function(3002): (3002 - 3000, 3002)=> 2 - 3002
        this.requests.shift(); // Remove the oldest ping if it's outside the 3000 ms window
    }
    // The length of the queue now represents the count of requests within the last 3000 ms
    return this.requests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */