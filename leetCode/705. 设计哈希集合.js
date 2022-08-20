// https://leetcode.cn/problems/design-hashset/

var MyHashSet = function() {
    this.arr = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!this.contains(key)){
        this.arr.push(key)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = this.arr.indexOf(key)
    while(index !==-1){
        this.arr.splice(index,1)
        index = this.arr.indexOf(key)
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.arr.indexOf(key) !== -1;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */