/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
	const length1 = list1.length;
	const length2 = list2.length;
	let minIndex = length2 + length1;
	let str = []
	for(let i = 0;i < length1;i++) {
		for(let j =0 ;j < length2; j++){
			if(list1[i] === list2[j]){
				let temp = i + j;
				if((i + j) < minIndex) {
					minIndex = i+j;
					str = [list1[i]]
				}else if((i + j) === minIndex){
					str.push(list2[j]);
				}
			}
		}
	}
	return str;
};


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
	const map = new Map();
	for(let i = 0;i < list1.length; i++) {
		map.set(list1[i],i);
	}
	let result = [];
	let minIndex = 200000;
	for(let j = 0; j< list2.length ;j++) {
		if(map.has(list2[j])) {
			const i = map.get(list2[j]);
			if((i + j) < minIndex) {
				result.length = 0;
				result.push(list2[j]);
				minIndex = i + j;
			}else if((i + j) === minIndex) {
				result.push(list2[j])
			}
		}
	}

	return result;
};


console.log(findRestaurant(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],list2 = ["KFC", "Shogun", "Burger King"]))
