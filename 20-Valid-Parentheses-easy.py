'''Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.'''

def check_bracket(s : str):
    print(f'-- {s}')
    bracket = {'(': ')',
               '[': ']',
               '{': '}'
               }
    length = len(s)
    list = []
    result = None
    for i in range(length-1):
        # get close of crr
        close_of_curr = bracket.get(s[i])
        
        # if close
        if close_of_curr == None:
            # first  => break
            if i == 0:
                break
        # if open => check
        else: 
            # get close off next
            close_of_next = bracket.get(s[i+1])
            # print(close_of_next)
            # if s[i+1] is close and diff with close_bracket
            if close_of_next == None and close_of_curr != s[i+1]:
                break
            else:
                index_close_bracket = s.rfind(close_of_curr, i)
                # print(index_close_bracket)
            while [True for el in list if index_close_bracket in el]:
                # print('research')
                index_close_bracket = s.rfind(bracket[s[i]], i,  index_close_bracket)

                
            if index_close_bracket > i:
                list.append([i,index_close_bracket])
                print(f'[{i},{index_close_bracket}]')

            
    if len(list) != length/2:
        result = False
    else:
        result = True
    return result
if __name__ == '__main__':
    # s = "()"
    # print(check_bracket(s))
    # s = "()[]{}"
    # print(check_bracket(s))
    # s = "]("
    # print(check_bracket(s))
    # s = "{[]}"
    # print(check_bracket(s))
    # s = "([]{})"
    # print(check_bracket(s))
    # s = "([]}{)"
    s = '[([]])'
    s = "[({(())}[()])]"
    # print(check_bracket(s))
    # s = "([)]"
    # print(check_bracket(s))
    # s = "(([]{)})"
    # print(check_bracket(s))
    # s ="({{{{}}}))"
    print(check_bracket(s))
    
    
    
    
