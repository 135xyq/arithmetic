var MyCalendar = function() {
    this.calendar = [];
};

/** https://leetcode.cn/problems/my-calendar-i/
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (const item of this.calendar) {
        if(end > item[0] && start < item[1]){
            return false;
        }
    }
    this.calendar.push([start,end]);
    return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

 var obj = new MyCalendar()
 console.log(obj.book(10, 20))
 console.log(obj.book(5, 25))
 console.log(obj.book(20, 30))