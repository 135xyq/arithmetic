/**https://leetcode.cn/problems/kth-largest-element-in-a-stream/
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.arr = [...nums];
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.arr.push(val);
    this.arr.sort((a,b)=>b-a);
    console.log(this.arr,this.k)
    return this.arr[this.k-1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */