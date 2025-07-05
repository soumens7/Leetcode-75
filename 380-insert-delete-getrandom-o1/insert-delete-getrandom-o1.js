
var RandomizedSet = function () {
    this.map = new Map();
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false;
    this.arr.push(val);  // store in array
    this.map.set(val, this.arr.length - 1);  // store val:index in map
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;
    let idToRemove = this.map.get(val);
    let lastElement = this.arr[this.arr.length - 1];

    // Move last element to index to delete to perform pop() and delete(val)
    this.arr[idToRemove] = lastElement;
    this.map.set(lastElement, idToRemove);

    // remove last element
    this.arr.pop();
    this.map.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randIndex = Math.floor(Math.random() * this.arr.length)
    return this.arr[randIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */