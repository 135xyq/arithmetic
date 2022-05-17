/**https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
 * @description 使用两个指针，
 * 先分别指向数组第一个和第二个数，
 * 然后比较两个指针之间的和与target，
 * 如果比target小，则第二个指针往后移，
 * 再次判断，
 * 如果比target大，则第一个指针往后移，
 * 如果与target相等，则将两个指针之间的数记录为结果数组的元素，
 * 直到两个指针指向同一个数，则说明后面不会再有符合条件的情况，
 * 退出循环，返回结果。
 * @param {number} target
 * @return {number[][]}
 */
 function findContinuousSequence(target) {
    const res = []
    let p1 = 1
    let p2 = 2


    function createArr(p1, p2) {
        const arr = []
        for (let i = p1; i <= p2; i++) {
            arr.push(i)
        }
        return arr
    }

    let sum = p1 + p2
    while (p1 < p2) {
        if (sum < target) {
            p2++
            sum += p2
        } else if (sum > target) {
            sum -= p1
            p1++
        } else {
            res.push(createArr(p1, p2))
            sum -= p1
            p1++
            p2++
            sum += p2
        }
    }

    return res
};

console.log(findContinuousSequence(9))