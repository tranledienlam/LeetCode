// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
    // console.log(strs.length)
    switch (strs.length) {
        case 0:
            return ''
        case 1:
            return strs[0]
        default:
            longest = strs.reduce((maxString, currentString) => {
                if (currentString.length > maxString.length) {
                    return currentString
                } else {
                    return maxString
                }
            })
            // console.log(longest)
            for (let i = 0; i < longest.length; i++) {
                // console.log(i)
                for (const str of strs) {
                    if (longest[i] != str[i]) {
                        return longest.slice(0, i)
                    }
                }
            }
            return longest
    }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// console.log(longestCommonPrefix(["a"]))
// console.log(longestCommonPrefix(["",""]))
// console.log(longestCommonPrefix(["ab","a"]))
// console.log(longestCommonPrefix(["flower","flower","flower","flower"]))