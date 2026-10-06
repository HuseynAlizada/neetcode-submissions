class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let ary = [];
        // for (let i = 0; i < nums.length; i++) {
        //     if (ary.includes(nums[i])) {
        //         return true;
        //     }
        //     ary.push(nums[i]);
        // }
        // return false;

        let ary=[]

        for(let i=0;i<nums.length;i++){
            if(ary.includes(nums[i])){
                return true
            }
            ary.push(nums[i])

        }
        return false
    }
}
