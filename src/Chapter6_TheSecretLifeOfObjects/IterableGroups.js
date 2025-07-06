const { Group } = require("./groups");

class IterableGroups extends Group {

  constructor() {
    super();
  }

  [Symbol.iterator]() {
    let index = 0;
    const members = this.group;

    return {
      next() {
        if (index < members.length) {
          return { value: members[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

console.log(typeof IterableGroups.from); // should log "function"
console.log(IterableGroups.from(["x"])); // should log an object

for (let value of IterableGroups.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c