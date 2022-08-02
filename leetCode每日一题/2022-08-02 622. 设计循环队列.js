/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.queue = new Array(k).fill(0);
    this.capacity = k + 1;
    this.front = 0;
    this.rear = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
*/

MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
        return false;
    }else{
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false;
    }else{
        this.front = (this.front + 1) % this.capacity
        return true;
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1;
    }else{
        return this.queue[this.front]
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1;
    }else{
        return this.queue[(this.rear - 1 + this.capacity) % this.capacity];
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === this.rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.front === (this.rear + 1 ) % this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


var obj = new MyCircularQueue(3)
var param_1 = obj.enQueue(1)
console.log(obj)
var param_2 = obj.enQueue(2)
console.log(obj)

var param_3 = obj.enQueue(3)
console.log(obj)

var param_4 = obj.enQueue(4)
console.log(obj)

console.log(param_1,param_2,param_3,param_4,obj)