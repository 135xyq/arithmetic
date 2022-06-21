/**https://leetcode.cn/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.replace(/\./g,"[.]")
};

/**https://leetcode.cn/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let arr = address.split(".");
    return arr.join("[.]")
};

console.log(defangIPaddr(address = "1.1.1.1"))