/**https://leetcode.cn/problems/koko-eating-bananas/
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let count = 1;
    while(true){
        let temp  = 0;
        let i = 0;
        for(i = 0 ; i < piles.length; i++) {
            if(piles[i] <= count){
                temp++;
            }else if(piles[i] > count){
                temp += Math.ceil(piles[i] / count);
            }
            if(temp > h){
                break;
            }
        }
        if(i === piles.length){
            return count;
        }else{
            count++;
        }
    }
};


var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = 0;
    for (const pile of piles) {
        high = Math.max(high, pile);
    }
    let k = high;
    while (low < high) {
        const speed = Math.floor((high - low) / 2) + low;
        const time = getTime(piles, speed);
        if (time <= h) {
            k = speed;
            high = speed;
        } else {
            low = speed + 1;
        }
    }
    return k;
}

const getTime = (piles, speed) => {
    let time = 0;
    for (const pile of piles) {
        const curTime = Math.floor((pile + speed - 1) / speed);
        time += curTime;
    }
    return time;
};


console.log(minEatingSpeed(piles = [30,11,23,4,20], h = 5))