
var SmallestInfiniteSet = function () {
  this.min = 1;
  this.content = new Set;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  this.content.add(this.min);
  let res = this.min
  while (this.content.has(this.min)) {
    this.min++;
  }
  return res;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.content.has(num)) {
    this.content.delete(num);
    if (this.min > num) {
      this.min = num;
    }
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */