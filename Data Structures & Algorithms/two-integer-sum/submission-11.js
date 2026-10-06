class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // const obj = {};
        // for(let i = 0; i < nums.length; i++) {
        //     let searched = target - nums[i];
        //     if(obj[searched] != null) {
        //         return [obj[searched], i]
        //     } else {
        //         obj[nums[i]] = i;
        //     }
        // }
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            let searched = target - nums[i];
            if (obj[searched] != null) {
                return [obj[searched], i];
            } else {
                obj[nums[i]] = i;
            }
        }
    }
}
