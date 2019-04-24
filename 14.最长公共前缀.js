/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.44%)
 * Total Accepted:    64.4K
 * Total Submissions: 198K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    // if (strs = []) {
    //     return '';
    // }
    // for (let i in strs) {
    //     for (let j = 0; j < strs[i].length; j++) {
    //         //i指的是str里的每一项单词。
    //         //j指的是每一项单词里的遍历
    //         if (strs[i][j] === strs[i + 1][j])
    //             strs[i][j]
    //     }
    // }

    let result = '';
    let i = 0;

    while (strs.length) {
        // ["flower","flow","flight"]
        const current = strs[0][i];
        let isSame = true;

        for (const s of strs) {
            if (s[i] !== current || i >= s.length) {
                isSame = false;
                break;
            }
        }

        if (isSame) {
            result += current;
        } else {
            break;
        }

        i++;
    }

    return result;
};

