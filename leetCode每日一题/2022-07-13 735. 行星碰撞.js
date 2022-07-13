/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
	let stack = [];
	for (const asteroid of asteroids) {
		if (stack.length === 0) {
			stack.push(asteroid);
		} else {
			if (asteroid < 0) {
				if (stack[stack.length - 1] < 0) {
					stack.push(asteroid);
				} else {
					let flag = false;
					while (stack.length) {
						if (stack[stack.length - 1] < 0) {
							stack.push(asteroid);
							flag = true;
							break;
						} else if (stack[stack.length - 1] > 0) {
							if (
								Math.abs(stack[stack.length - 1]) >
								Math.abs(asteroid)
							) {
								flag = true;
								break;
							} else if(Math.abs(stack[stack.length - 1]) <
                            Math.abs(asteroid)){
								stack.pop();
                                
							}else{
                                stack.pop();
                                flag = true;
                                break;
                            }
						}
					}
					if (!flag) {
						stack.push(asteroid);
					}
				}
			} else {
				if (stack[stack.length - 1] > 0) {
					stack.push(asteroid);
				} else {
					let flag = false;
					while (stack.length) {
						if (stack[stack.length - 1] > 0) {
							stack.push(asteroid);
							flag = true;
							break;
						} else if (stack[stack.length - 1] < 0) {
							if (
								Math.abs(stack[stack.length - 1]) >
								Math.abs(asteroid)
							) {
								flag = true;
								break;
							} else if (Math.abs(stack[stack.length - 1]) <
                            Math.abs(asteroid)){
								stack.pop();
							}else {
                                stack.pop();
                                flag = true;
                                break;
                            }
						} 
					}
					if (!flag) {
						stack.push(asteroid);
					}
				}
			}
		}
	}
	return stack;
};

var asteroidCollision = function(asteroids) {
    const stack = [];
    for (const aster of asteroids) {
        let alive = true;
        while (alive && aster < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            alive = stack[stack.length - 1] < -aster; // aster 是否存在
            if (stack[stack.length - 1] <= -aster) {  // 栈顶行星爆炸
                stack.pop();
            }
        }
        if (alive) {
            stack.push(aster);
        }
    }
    const size = stack.length;
    const ans = new Array(size).fill(0);
    for (let i = size - 1; i >= 0; i--) {
        ans[i] = stack.pop();
    }
    return ans;
};


console.log(asteroidCollision((asteroids = [8, -8])));
