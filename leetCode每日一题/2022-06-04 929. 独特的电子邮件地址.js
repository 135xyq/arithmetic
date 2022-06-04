/**https://leetcode.cn/problems/unique-email-addresses/
 * @param {string[]} emails
 * @return {number}
 */

var numUniqueEmails = function (emails) {
    emails = emails.map(item=>{
        const temp = item.split("@");
        temp[0] = temp[0].replace(/\./g,"");
        const addIndex = temp[0].indexOf("+");
        if(addIndex !== -1) {
            temp[0] = temp[0].slice(0,addIndex);
        }
        return temp.join("@");
    })
    // console.log(emails)
    let set = new Set(emails);
    return set.size;

};

console.log(
	numUniqueEmails(
		(emails = [
			"test.email+alex@leetcode.com",
			"test.e.mail+bob.cathy@leetcode.com",
			"testemail+david@lee.tcode.com",
		])
	)
);
