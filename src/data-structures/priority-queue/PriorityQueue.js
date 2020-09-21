/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
// It is the same as min heap except that when comparing two elements
// we take into account its priority instead of the element's value.

export default class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  add(value, priority = 0) {
    const x = { value, priority };
    if (this.isEmpty()) {
      this.queue = [value];
      return this.queue;
    }
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority <= x.priority) {
        return this.queue.splice(i, 0, x);
      }
    }
    return this.queue.push(x);
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.isEmpty() ? 'queue is empty' : this.queue.slice(-1)[0].value;
  }

  poll() {
    return this.isEmpty() ? 'queue is empty' : this.queue.pop().value;
  }

  findByValue(value) {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].value === value) {
        return this.queue[i];
      }
    }
    return undefined;
  }

  changePriority(value, priority) {
    const i = this.findByValue(value);
    this.queue.splice(i, 1);
    this.add(value, priority);
  }

  hasValue(value) {
    if (this.findByValue(value)) {
      return true;
    }
    return false;
  }
}
