/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    for (let i = 0; i < rectangles.length; i++) {
        for (let j = i + 1; j < rectangles.length; j++) {
            if (isMixins(rectangles[i], rectangles[j])) {
                return false;
            }
        }
    }
    let nums1 = [],
        nums2 = [],
        nums3 = [],
        nums4 = [];
    for (let i = 0; i < rectangles.length; i++) {
        nums1.push(rectangles[i][0]);
        nums2.push(rectangles[i][1]);
        nums3.push(rectangles[i][2]);
        nums4.push(rectangles[i][3]);
    }
    const minNum1 = Math.min(...nums1);
    const minNum2 = Math.min(...nums2);
    const maxNum3 = Math.max(...nums3);
    const maxNum4 = Math.max(...nums4);
    const maxArear = (maxNum4 - minNum2) * (maxNum3 - minNum1);
    let sum = 0;
    rectangles.forEach(item => {
        sum += ((item[3] - item[1]) * (item[2] - item[0]));
    })

    if (sum === maxArear) {
        return true;
    } else {
        return false;
    }
};

/**传入两个数组判断是否相交
 */
function isMixins(a, b) {
    const a1 = (a[0] + a[2]) / 2;
    const a2 = (a[1] + a[3]) / 2;
    const b1 = (b[0] + b[2]) / 2;
    const b2 = (b[1] + b[3]) / 2;
    const t1 = (a[2] - a[0]) / 2;
    const t2 = (a[3] - a[1]) / 2;
    const t3 = (b[2] - b[0]) / 2;
    const t4 = (b[3] - b[1]) / 2;
    if ((Math.abs(a1 - b1) < (t1 + t3)) && (Math.abs(a2 - b2) < (t2 + t4))) {
        return true;
    } else {
        return false;
    }
}


/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */

//  只要满足两个条件就是完美矩形：
// 1.所有矩形总面积 == 恰好围住所有矩形的大矩形的面积
// 2.任意两个矩形都没有重叠。这种情况下由于所有矩形是镶嵌的，所以位于大矩形内（除了大矩形的四个角）的任何位置的小矩形顶点数只可能为0,2,4。其他任何情况都代表有重叠。而大矩形四个顶点处的小矩形顶点数量只能为1。
//  */
var isRectangleCover = function(rectangles) {
    let nums1 = [],
        nums2 = [],
        nums3 = [],
        nums4 = [];
    for (let i = 0; i < rectangles.length; i++) {
        nums1.push(rectangles[i][0]);
        nums2.push(rectangles[i][1]);
        nums3.push(rectangles[i][2]);
        nums4.push(rectangles[i][3]);
    }
    const minNum1 = Math.min(...nums1);
    const minNum2 = Math.min(...nums2);
    const maxNum1 = Math.max(...nums3);
    const maxNum2 = Math.max(...nums4);
    const maxArear = (maxNum2 - minNum2) * (maxNum1 - minNum1);
    let sum = 0;
    rectangles.forEach(item => {
        sum += ((item[3] - item[1]) * (item[2] - item[0]));
    })
    let a = []; //存放每个坐标的字符串
    if (sum === maxArear) {
        for (let i = 0; i < rectangles.length; i++) {
            // 将四个角的坐标加入
            a.push(nums1[i] + "," + nums2[i]);
            a.push(nums1[i] + "," + nums4[i]);
            a.push(nums3[i] + "," + nums4[i]);
            a.push(nums3[i] + "," + nums2[i]);
        }
        let map = new Map();
        for (let i = 0; i < a.length; i++) {
            if (map.has(a[i])) {
                map.set(a[i], map.get(a[i]) + 1);
            } else {
                map.set(a[i], 1);
            }
        }
        // 判断四个顶点是否重复一次
        // 四个顶点
        const leftBottom = minNum1 + ',' + minNum2;
        const leftTop = minNum1 + ',' + maxNum2;
        const rightBottom = maxNum1 + ',' + minNum2;
        const rightTop = maxNum1 + ',' + maxNum2;
        const four = [leftBottom, leftTop, rightBottom, rightTop];
        for (const [key, value] of map) {
            if (value == 1) {
                if (four.indexOf(key) === -1) {
                    return false;
                }
            } else if (value == 2) {
                if (four.indexOf(key) != -1) {
                    return false;
                }
            } else if (value == 4) {
                if (four.indexOf(key) != -1) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};


console.log(isRectangleCover(
    rectangles = [
        [1, 1, 3, 3],
        [3, 1, 4, 2],
        [1, 3, 2, 4],
        [2, 2, 4, 4]
    ]
))