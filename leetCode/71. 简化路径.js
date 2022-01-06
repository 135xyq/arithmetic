/**
 * @param {string} path
 * @return {string}
 */

// 始终以斜杠 '/' 开头。
// 两个目录名之间必须只有一个斜杠 '/' 。
// 最后一个目录名（如果存在）不能 以 '/' 结尾。
// 此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。

var simplifyPath = function(path) {
	const arr  = [...path];
	if(arr[0]!== '/'){
		arr.unshift('/')
	}
	for(let i = 1;i<arr.length;i++){
		if(arr[i] === '/'){
			// 两个相连的 '/'
			if(arr[i-1] === '/'){
				arr.splice(i,1)
			}
			// 最后一个是'/'
			if(i===arr.length - 1){
				arr.splice(i,1)
			}
		}else if(arr[i] === '.'){
			//最后一个是'.'
			if(i === arr.length - 1){
				arr.splice(i,1);
			}else if(arr[i+1] !== '.'){
				if(arr[i+1] === '/'){
					arr.splice(i,2);
				}else{
					arr.splice(i,1);
				}
			}else if(arr[i+1] === '.'){
				if(i+1 === arr.length -1){
					arr.splice(i,2);
				}else if(arr[i+2] !== '.'){
					arr.splice(i,2);
				}
			}
		}
	}

	return arr.join('')
};


var simplifyPath = function(path) {
    const names = path.split("/");
    const stack = [];
    for (const name of names) {
        if (name === "..") {
            if (stack.length) {
                stack.pop();
            } 
        } else if (name.length && name !== ".") {
            stack.push(name);

        }
    }
    
    return "/" + stack.join("/");
};