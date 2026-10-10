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

        // const map = new Map();
        // for (let str of strs) {
        //     const ary = new Array(26).fill(0);
        //     for (let key of str) {
        //         ary[key.charCodeAt(0) - 97]++;
        //     }
        //     const joinKey = ary.join(",");

        //     if (!map.has(joinKey)) map.set(joinKey, []);
        //     map.get(joinKey).push(str);
        // }
        // return [...map.values()];

        // const stringAry = strs.map((str) => str.split("").sort().join(""));
        // const obj = new Map();

        // for (let i = 0; i < stringAry.length; i++) {
        //     const key = stringAry[i];
        //     if (!obj.has(key)) {
        //         obj.set(key, []);
        //     }
        //     obj.get(key).push(strs[i]); // orijinal söz, hər halda push
        // }

        // return [...obj.values()];
    }
}
