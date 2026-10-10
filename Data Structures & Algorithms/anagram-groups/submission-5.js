class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj={}
    for(let item of strs){
      const sortedItem=item.split('').sort().join('')
      if(!obj[sortedItem]){
         obj[sortedItem]=[]
      }
      obj[sortedItem].push(item)
    }
  return Object.values(obj)
    }
}
