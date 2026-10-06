class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let text=s.toLowerCase().replace(/[^a-z0-9]/g, "")
       const reversed = text.split("").reverse().join("");
       return text === reversed;
    }
}
