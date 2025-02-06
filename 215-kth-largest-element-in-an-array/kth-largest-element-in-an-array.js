/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    let minHeap = new MinPriorityQueue(); // new min heap

    for (let num of nums) {
        minHeap.enqueue(num); // Add element to heap(minHeap)
        if (minHeap.size() > k) { // if size of queue greater than k
            minHeap.dequeue(); // Remove smallest element in minHeap
        }
    }
    return minHeap.front().element; // top element is the kth largest


};