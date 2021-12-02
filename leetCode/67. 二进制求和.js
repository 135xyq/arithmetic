/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const num1 = a.split('');
    const num2 = b.split('');
    const num3 = [];
    const minLength = Math.min(num1.length, num2.length);

    if (minLength === num1.length) {
        for (let i = minLength - 1; i >= 0; i--) {
            num3.unshift(Number(num1[i]) + Number(num2[num2.length + i - minLength]));
        }
        for (let j = num2.length - minLength - 1; j >= 0; j--) {
            num3.unshift(Number(num2[j]));
        }
    } else {
        for (let i = minLength - 1; i >= 0; i--) {
            num3.unshift(Number(num2[i]) + Number(num1[num1.length + i - minLength]));
        }
        for (let j = num1.length - minLength - 1; j >= 0; j--) {
            num3.unshift(Number(num1[j]));
        }
    }
    console.log(num3)
    for (let i = num3.length - 1; i >= 0; i--) {
        if (num3[i] > 1 && i != 0) {
            num3[i] = num3[i] % 2;
            num3[i - 1]++;
        } else if (num3[i] > 1 && i == 0) {
            num3[i] = num3[i] % 2;
            num3.unshift(1);
        } else {
            continue;
        }
    }
    return num3.join('');
};
console.log(addBinary(a = "100", b = "00001"))