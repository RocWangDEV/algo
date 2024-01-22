/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const stack = new Array();
  for (let i = 0; i < s.length; i++) {
    if (
      stack.length 
      && (stack[stack.length - 1] + s[i] === 'AB' || stack[stack.length - 1] + s[i] === 'CD')
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length;
};

minLength('ACBBD');