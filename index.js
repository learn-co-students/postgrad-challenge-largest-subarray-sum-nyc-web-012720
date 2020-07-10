function largestSubarraySum(nums) {

    let max = 0;
    let currentMax = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(currentMax, max);               
    }
    
    return (max > 0 ? max : 0);
};