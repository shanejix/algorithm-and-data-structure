// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:

// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"

// Example 2:

// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

function _(s) {
  let longest = 0;
  const stack = [];

  if (!s) return 0;

  // init -1
  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      //  store item index
      stack.push(i);
    } else {
      // in case :item === ) and inital stack -1
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        longest = Math(longest, i - stack[stack.length - 1]);
      }
    }
  }
  return longest;
}
