class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if (s.length !== t.length) return false;

        // let count = {};
        // for (let i = 0; i < s.length; i++) {
        //     count[s[i]] = (count[s[i]] || 0) + 1;
        //     count[t[i]] = (count[t[i]] || 0) - 1;
        // }

        // for (let key in count) {
        //     if (count[key] !== 0) return false;
        // }
        // return true;
        // if (s.length !== t.length) return false;

        // let obj = new Map();

        // for (ch of s) {
        //     obj.set(ch, (obj.get(ch) || 0) + 1);
        // }
        // for (ch of t) {
        //     if(obj.)
        //     obj.set(ch, (obj.get(ch) || 0) - 1);
        // }

        let sorted1=s.split('').sort().join('')
        let sorted2=t.split('').sort().join('')
        return sorted1==sorted2

    }
}
