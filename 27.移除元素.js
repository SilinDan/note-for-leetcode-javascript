/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 初始值i=0, j=0
    // i为慢指针，j为快指针
    // 遍历nums,如果 nums[j] === val ,则j+1
    // 如果nums[j]!==val,则i++, nums[i]=nums[j],最后返回i
    
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        } 
    }
    return i;
};