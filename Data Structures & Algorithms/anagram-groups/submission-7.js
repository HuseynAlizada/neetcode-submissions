class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let item of strs) {
            const sortedItem = item.split("").sort().join("");
            if (!map.has(sortedItem)) map.set(sortedItem, []);
             map.get(sortedItem).push(item)
        }
        return [...map.values()];
    }
}
