// /**
//  * 给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。
//  *
//  * 请你返回 words 数组中 一致字符串 的数目。
//  * @param allowed
//  * @param words
//  */
// function countConsistentStrings(allowed: string, words: string[]): number {
//   let result: number = 0
//   const allowedSort: string[] = allowed.split('').sort()
//   for (let i = 0; i < words.length; i++) {
//     // @ts-ignore
//     let temp: string[] = [...new Set(words[i].split(''))].sort()
//     let flag: boolean = true
//     for (let j = 0; j < temp.length; j++) {
//       if (allowedSort.indexOf(temp[j]) === -1) {
//         flag = false
//         break
//       }
//     }
//     flag && result++
//   }
//   return result
// }


/*
**
* 给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。
*
* 请你返回 words 数组中 一致字符串 的数目。
* @param allowed
* @param words
*/
function countConsistentStrings(allowed: string, words: string[]): number {
  let result: number = 0
  loop: for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (allowed.indexOf(words[i][j]) === -1) {
        continue loop
      }
    }
    result++
  }
  return result
}


console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]))