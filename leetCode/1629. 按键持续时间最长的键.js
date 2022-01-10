/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
	const arr = new Array(26).fill(0);
	releaseTimes.unshift(0)
	maxNum = 0;
	maxKey = null;
	for(let i = 0;i<keysPressed.length;i++){
		if(releaseTimes[i+1] - releaseTimes[i] > maxNum){
			maxNum = releaseTimes[i+1] - releaseTimes[i];
			maxKey = keysPressed.charAt(i);
		}else if(releaseTimes[i+1] - releaseTimes[i] === maxNum){
			if(maxKey.charCodeAt() < keysPressed.charCodeAt(i)){
				maxKey = keysPressed.charAt(i)
			}
		}
	}
	return maxKey;
};

console.log(slowestKey(releaseTimes = [12,23,36,46,62], keysPressed = "spuda"))