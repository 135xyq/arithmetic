/**https://leetcode.cn/problems/valid-boomerang/
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    if(isSamePoint(points[0],points[1]) || isSamePoint(points[1],points[2]) || isSamePoint(points[0],points[2])){
        // 是否有点的坐标相同
        return false;
    }else{
        if(points[0][0] - points[1][0] === 0){
            if(points[2][0] === points[1][0]){
                return false;
            }else{
                return true;
            }
        }else{
            // const k = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
            // const b = points[0][1] - k * points[0][0];
            // if((points[2][0]* k + b) === points[2][1]){
            //     return false;
            // } 
            if((((points[1][1] - points[0][1])) * (points[2][0] - points[0][0]) / (points[1][0] - points[0][0])) + points[0][1] === points[2][1]){
                return false;
            }
            return true;
        }
    }
}

function isSamePoint(point1,point2){
    if(point1[0] === point2[0] && point1[1]===point2[1]){
        return true;
    }else{
        return false;
    }
}



var isBoomerang = function(points) {
    const v1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]];
    const v2 = [points[2][0] - points[0][0], points[2][1] - points[0][1]];
    return v1[0] * v2[1] - v1[1] * v2[0] != 0;
};


console.log(isBoomerang([[22,33],[37,27],[67,15]]))