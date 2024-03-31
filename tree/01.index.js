const str = '9,3,4,#,#,1,#,#,2,#,6,#,#';

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const n = preorder.length;
    let i = 0;
    let rest = 1;

    while (i < n) {
        if (rest === 0) return false;
        if (preorder[i] === ',') {
            i++;
        } else if (preorder[i] === '#') {
            rest--;
            i++;
        } else {
            while (i < n && preorder[i] !== ',') {
                i++;
            }
            rest++;
        }
    }

    return rest === 0;
};

console.log(isValidSerialization(str));