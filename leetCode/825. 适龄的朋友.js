/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
	// age[y] <= 0.5 * age[x] + 7
	// age[y] > age[x]
	// age[y] > 100 && age[x] < 100

	let count = 0;
	let j = 0;
	ages = ages.sort((a,b)=>a-b);
	let length = ages.length;
	for(let i = 0;i<length;i++){
		let uper= ages[i] * 0.5 +7;
		let low = ages[i];
		let l = i;
		let u = i;
		if(ages[l] > low){
			l--;
		}

		if(ages[u] <= uper){
			u++
		}

		console.log('ages:',ages[i],'  l:',l,'    u:',u)

		count += (u-l);
	}
	ages = ages.sort((a,b)=>b-a);
	for(let i = 0;i<length;i++){
		let uper= ages[i] * 0.5 +7;
		let low = ages[i];
		let l = i;
		let u = i;
		if(ages[i] > 100 && ages[i+1] <100){
			continue;
		}
		if(ages[u] < uper){
			u--;
		}

		if(ages[l] >= low){
			l++
		}

		console.log('ages:',ages[i],'  l:',ages[l],'    u:',ages[u])

		count += (l-u);
	}
	return count;
};

console.log(numFriendRequests(ages = [20,30,100,110,120]))