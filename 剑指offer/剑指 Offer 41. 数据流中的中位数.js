/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.data = [];
    this.length = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // console.log(this.data, this.length)
    let flag = false;
    for (let i = 0; i < this.length; i++) {
        if (this.data[i] > num) {
            if (i === 0) {
                this.data.unshift(num)
            } else {
                this.data.splice(i, 0, num);
            }
            flag = true;
            break;
        }
    }
    if (!flag) {
        this.data.push(num)
    }
    this.length++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.length === 0) {
        return null;
    }
    if (this.length % 2 === 1) {
        return this.data[Math.floor(this.length / 2)];
    } else {
        return (this.data[Math.floor(this.length / 2)] + this.data[Math.floor(this.length / 2) - 1]) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */