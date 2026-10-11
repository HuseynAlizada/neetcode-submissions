class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        }

       return Object.entries(obj)
            .sort((a, b) => a[1] - b[1])
            .slice(-k)
            .map((item) => +item[0]);
    }
}
