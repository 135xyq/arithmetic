/**https://leetcode.cn/problems/validate-ip-address/
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    if(queryIP.includes('.')){
        // 可能是IPv4
        const arr = queryIP.split('.');
        if(arr.length !==4){
            return "Neither";
        }else{
            let result = arr.every(item=>{
                if(item < 0 || item > 255 || item.length===0 || (item[0]==0&&item.length>1)){
                    return false;
                }
                let temp = item.split('');
                let allow = ["0","1","2","3","4","5","6","7","8","9"];
                let flag = false;
                temp.forEach(item=>{
                    if(!allow.includes(item)){
                        flag = true;
                    }
                })
                if(flag){
                    return false;
                }
                return true;
            });
            if(result){
                return "IPv4";
            }else{
                return "Neither";
            }
        }
    }else{
        // 可能是IPv6
        const allow = ["a","b","c","d","e","f","A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
        const arr = queryIP.split(":");
        if(arr.length !== 8){
            return "Neither";
        }else{
            // console.log(arr)
            let result = arr.every(item=>{
                if(item.length < 1 || item.length > 4 ){
                    return false;
                }
                let temp = item.split('');
                let flag = false;//是否有不合法字符
                // console.log(1,item)
                // console.log(temp)
                temp.forEach(item=>{
                    if(!allow.includes(item)){
                        flag = true;
                    }
                })
                // console.log(flag)
                if(flag){
                    return false
                }
                return true;

            });
            if(result){
                return "IPv6";
            }else{
                return "Neither";
            }
        }
    }
};

console.log(validIPAddress(queryIP = "1.0.1."))

