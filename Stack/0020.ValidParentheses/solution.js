// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true

// Example 2:

// Input: "()[]{}"
// Output: true

// Example 3:

// Input: "(]"
// Output: false

// Example 4:

// Input: "([)]"
// Output: false

// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result = false;
  let stack = [];

  let obj = {
    "(": ")",
    ")": "(",
  };
  if (s && s.length) {
    let splitStrArr = s.split("");

    while (splitStrArr.length) {
      let item = splitStrArr.shift();
      if (stack.length === 0) {
        stack.push(item);
      } else {
        if (stack[stack.length - 1] === obj[item]) {
          stack.pop();
        } else {
          stack.push(item);
        }
      }
    }
  }
  if (stack.length === 0) {
    result = true;
  }
  console.log(stack);

  return result;
};

console.log(isValid("()"));
// console.log(isValid("([)]"));
