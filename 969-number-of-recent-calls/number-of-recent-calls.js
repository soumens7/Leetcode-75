
var RecentCounter = function () {
    this.requests = []; // queue to store timestamps of the pings
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.requests.push(t);

    while (this.requests[0] < t - 3000) {
        this.requests.shift();
    }
    // The length of the queue now represents the count of requests within the last 3000 ms
    return this.requests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */