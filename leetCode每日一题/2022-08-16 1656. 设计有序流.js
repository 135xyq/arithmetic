/**https://leetcode.cn/problems/design-an-ordered-stream/
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.array = new Array(n+1);
    this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.array[idKey] = value
    if(idKey === this.ptr){
        let result = [];
        for(let j = idKey;j<this.array.length;j++){
            if(this.array[j] === undefined){
                this.ptr = j;
                return result;
            }else{
                result.push(this.array[j]);
            }
        }
        return result;
    }else{
        this.array[idKey] = value
    }
    return [];
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */