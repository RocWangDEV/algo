
var FrontMiddleBackQueue = function () {
  this.value = null;
  this.size = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  if (this.value === null) {
    this.value = { value: val, next: null };
  } else {
    const newNode = { value: val, next: this.value };
    this.value = newNode;
  }
  this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  let count = Math.round(this.size / 2) - 1 === 0
    ? 1
    : Math.round(this.size / 2) - 1;
  let current = this.value;
  let pre = null;

  while (count > 0) {
    pre = current;
    current = current.next;
    count--;
  }

  const newNode = { value: val, next: null }
  newNode.next = current;
  pre.next = newNode;
  this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  let count = this.size;
  let current = this.value;
  let pre = null;

  while (count > 0) {
    pre = current;
    current = current.next;
    count--;
  }

  const newNode = { value: val, next: null }
  newNode.next = current;
  pre.next = newNode;
  this.size++;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.size === 0) return -1;
  const result = this.value.value;
  this.value = this.value.next;
  this.size--;
  return result;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.size === 2) {
    const result = this.value.value;
    this.value = this.value.next;
    this.size--;
    return result;
  }
  const middleIndex = Math.floor(this.size / 2);
  let current = this.value;
  let pre = null;
  let count = 0;
  while (count < middleIndex) {
    pre = current;
    current = current.next;
    count++;
  }

  pre.next = current.next;
  this.size--;
  return current.value;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.value === null) return -1;
  if (this.size === 1) {
    const result = this.value.value;
    this.value = null;
    this.size--;
    return result;
  }
  if (this.size > 1) {
    let count = this.size - 1;
    let current = this.value;
    let pre = null;
    while (count > 0) {
      pre = current;
      current = current.next;
      count--;
    }
    pre.next = null;
    this.size--;
    return current.value;
  }
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */