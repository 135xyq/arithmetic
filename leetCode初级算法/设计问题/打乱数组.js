/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.arr = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let temp = [...this.arr];
    for(let i = 0 ; i < temp.length; i++) {
        let index = Math.floor(Math.random() * (i+1))
        let t = temp[index];
        temp[index] = temp[i];
        temp[i] = t
    }
    return temp
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */