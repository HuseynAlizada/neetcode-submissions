class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let stringAry = strs.map((str) => str.split("").sort().join(""));
        const obj = {};
        for (let i = 0; i < stringAry.length; i++) {
            if (!obj[stringAry[i]]) {
                obj[stringAry[i]] = [];
                obj[stringAry[i]].push(strs[i]);
            } else {
                obj[stringAry[i]].push(strs[i]);
            }
        }
        return Object.values(obj);
    }
}
