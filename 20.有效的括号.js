/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.02%)
 * Total Accepted:    67.2K
 * Total Submissions: 179.2K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */

// 方法①：正则消消碰 
// var isValid = function (s) {
//     while (/(\(\))|(\[\])|(\{\})/g.test(s)) {
//         s = s.replace(/\(\)/g, "");
//         s = s.replace(/\{\}/g, "");
//         s = s.replace(/\[\]/g, "");
//     }

//     return s.length ? false : true;
// };


var isValid = function (s) {

    const left = ['(', '{', '['];
    const right = [')', '}', ']'];
    let stack = [];
    // 遍历字符串
    for (let a of s) {
        // 如果遇到左括号，存入栈中
        if (left.indexOf(a) !== -1) {
            stack.push(a);
        }
        // 如果遇到右括号，判断栈里有没有长度，没有就false
        else {
            // 有就查看栈的最后一个是否为与其匹配的左括号
            if (stack.length >= 1 && stack[stack.length - 1] === left[right.indexOf(a)]) {
                // 如果匹配，出栈
                stack.pop();
            } else {
                return false;
            }
        }
    }
    // 如果最后栈为空，则ture，否则false
    return (stack.length === 0) ? true : false;
}



