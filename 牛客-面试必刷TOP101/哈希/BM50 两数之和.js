/**
 *
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
 function twoSum( numbers ,  target ) {
    // write code here
    let map = {}
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] in map){
            return [map[numbers[i]],i+1];
        }else{
            map[target - numbers[i]] = i+1;
        }
    }
}


console.log(twoSum([3,2,4],6))