/**https://leetcode.cn/problems/design-circular-deque/
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.rear = 0;
    this.back = 0;
    this.array = new Array(k+1);
    this.size = k + 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()){
        return false;
    }
    this.rear = (this.rear-1+this.size) % this.size;
    this.array[this.rear] = value;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()){
        return false;
    }
    this.array[this.back] = value;
    this.back = (this.back+1) % this.size;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()){
        return false;
    }else{
        this.rear = (this.rear +1) % this.size;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()){
        return false;
    }else{
        this.back = (this.back -1 + this.size) % this.size;
        return true;
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()){
        return -1;
    }else{
        return this.array[this.rear]
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()){
        return -1;
    }else{
        return this.array[(this.back -1 + this.size) % this.size]
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.back === this.rear;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return (this.back + 1) % this.size === this.rear;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */