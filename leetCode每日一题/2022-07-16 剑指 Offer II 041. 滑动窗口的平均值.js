/**https://leetcode.cn/problems/qIsx9U/
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
    this.arr =[];
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.arr.push(val);
    if(this.arr.length < this.size){
        let sum = 0;
        for (const item of this.arr) {
            sum += item;
        }
        return sum / this.arr.length
    }else{
        let sum = 0;
        for (let i = 0; i < this.size; i++) {
            sum += this.arr[this.arr.length-1-i];
        }
        return sum / this.size;
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */