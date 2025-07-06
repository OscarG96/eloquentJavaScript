class Group {
  
  constructor() {
    this.group = []
  }

  static from(iterable) {
    let group = new this();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
  
  add(entry) {
    if (!this.has(entry)) {
      this.group.push(entry);
    }
  }

  delete(entry) {
  this.group = this.group.filter(v => v !== entry);
  }

  has(entry) {
    return this.group.includes(entry)
  }
  
}

module.exports = { Group }

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
