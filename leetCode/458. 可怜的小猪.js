/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
	const count = Math.floor(minutesToTest / minutesToDie) + 1;
	const result = Math.ceil(Math.log(buckets) / Math.log(count));
	return result;
};

console.log(poorPigs(buckets = 1000, minutesToDie = 15, minutesToTest = 60));