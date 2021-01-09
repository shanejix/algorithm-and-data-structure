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
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
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
  // console.log(stack);

  return result;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("({[]})"));
console.log(isValid("([)]"));
console.log(isValid("("));
console.log(isValid("(("));

// optimization

var isValid2 = function (s) {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  if (s && s.length) {
    for (let i = 0; i < s.length; i++) {
      // left pairs push stack
      if (pairs[s[i]]) {
        stack.push(pairs[s[i]]);
      } else {
        // right pairs pop stack
        let item = stack.pop();
        if (item !== s[i]) return false;
      }
    }
  }

  // if (stack.length === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return stack.length === 0;
};

console.log("2:", isValid2("()"));
console.log("2:", isValid2("()[]{}"));
console.log("2:", isValid2("({[]})"));
console.log("2:", isValid2("([)]"));
console.log("2:", isValid2("("));
console.log("2:", isValid2("(("));
