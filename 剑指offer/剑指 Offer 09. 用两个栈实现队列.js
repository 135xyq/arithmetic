var CQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stack.length === 0) {
        return -1;
    } else {
        return this.stack.shift();
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var obj = new CQueue()
obj.appendTail(1)
obj.appendTail(2)
var param_2 = obj.deleteHead();
console.log(param_2)