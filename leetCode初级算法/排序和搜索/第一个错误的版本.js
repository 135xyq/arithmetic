/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		for (let i = n; i > 0; i--) {
			if (isBadVersion(i) && !isBadVersion(i - 1)) {
				return i;
			}
		}
	};
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let left = 1;
		let right = n;
		let mid = 0;
        while(left <= right) {
            mid = Math.floor((left - right) / 2 + right);
            if(isBadVersion(mid)){
                right = mid - 1;
            }else{
                left = mid+1
            }
        }
        return left;
	};
};
