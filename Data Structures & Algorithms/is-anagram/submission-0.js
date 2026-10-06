class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let item1 = s.split("").sort().join("");
        let item2 = t.split("").sort().join("");
        if (item1 === item2) {
            return true;
        } else {
            return false;
        }
    }
}
