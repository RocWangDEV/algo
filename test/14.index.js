
var CountIntervals = function() {
    this.map = new Map();
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function(left, right) {
    if (this.map.size === 0) {
        this.map.set([left, right], right + 1 - left);
        return;
    }
    for (const [key, value] of this.map.entries()) {
        let l = key[0], r = key[1];
        if (left >= l && left <= r && right >= r) {
            // 换右边
            this.map.delete([l, r]);
            r = right;
            this.map.set([l, r], r + 1 - l);
        } else if (right >= l && right <= r && left <= l) {
            // 换左边
            this.map.delete([l, r]);
            l = left;
            this.map.set([l, r], r + 1 - l);
        } else if (left <= l && right >= r) {
            // 包含
            this.map.delete([l, r]);
            l = left;
            r = right;
            this.map.set([l, r], r + 1 - l);
        } else if (left >= l && right <= r) {
            // 小包含
            this.map.delete([l, r]);
            this.map.set([l, r], r + 1 - l);
        } else {
            this.map.set([left, right], right + 1 - left);
        }
    }
};

/**
 * @return {number}
 */
CountIntervals.prototype.count = function() {
    console.log(this.map);
};

/**
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */

const res = new CountIntervals();
res.add(2, 3);
res.add(7, 10);
console.log(res);