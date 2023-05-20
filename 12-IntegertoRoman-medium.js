// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.



// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= num <= 3999

var intToRoman = function (num) {
    roman = {
        0: ['I', 'V', 'X'],
        1: ['X', 'L', 'C'],
        2: ['C', 'D', 'M'],
        3: ['M'],
    }
    num_str = num.toString()
    len = num_str.length
    reverse_num_str = ''
    for (let index = len - 1; index > -1; index--) {
        reverse_num_str += num_str[index]

    }
    result = ''
    console.log(num_str)
    for (let index = len - 1; index > -1; index--) {
        num_part = parseInt(reverse_num_str[index])
        if (0 < num && num < 4000) {
            switch (num_part) {
                case 1:
                case 2:
                case 3:
                    // console.log(reverse_num_str[index], index, roman[index])
                    result += roman[index][0].repeat(num_part)
                    break;
                case 4:
                    // console.log(reverse_num_str[index], index, roman[index])
                    result += roman[index][0] + roman[index][1]
                    break;
                case 5:
                    // console.log(reverse_num_str[index], index, roman[index])
                    result += roman[index][1]
                    break;
                case 6:
                case 7:
                case 8:
                    // console.log(reverse_num_str[index], index, roman[index])
                    result += roman[index][1] + roman[index][0].repeat(num_part - 5)
                    break;
                case 9:
                    // console.log(reverse_num_str[index], index, roman[index])
                    result += roman[index][0] + roman[index][2]
                    break;
                default:
                    break;
            }

        } else {
            console.log('out range')
        }
    }

    return result
};

// console.log(intToRoman(3))
// console.log(intToRoman(580))
console.log(intToRoman(3999))