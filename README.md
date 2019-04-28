# note-for-leetcode-javascript
personal note for leetcode. Code in javascript

# Note：
### 7.  Reverse Integer
This problem can be solved by mathematical methods.

For example, we assume that x = 123:
```js
let num = x;
let n = 0;
while(num){
   n = (n * 10) + (num % 10);
   num = parseInt(num / 10);
}
```
Then, n will be the reverse integer we want.

### 9. Palindrome Number
This problem can be solved by the same methods like No.7 problem.

### 13. Roman to Integer
We can image only 6 situations will be different from direct addition.

'IV' = 4 , 'IX' = 9 , 'XL' = 40 , 'XC' = 90 , 'CD' = 400 , 'CN' = 900

So we const a object to save the roman to map integer. Then distinguish the situation and add.

### 14. Longest Common Prefix
① let result = '',isSame = true, use strs[0][i] as a reference.

② while strs.length, look through strs ,  let s of strs, if s[i]!== str[0][i], isSame = false and break

③ if isSame = true , result += current.

### 20. Valid Parentheses

method 1 ：
 regular expression ，use '' replace parentheses.

method 2 :
 stack
