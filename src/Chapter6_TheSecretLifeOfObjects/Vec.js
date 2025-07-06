class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    let x = vector.x + this.x;
    let y = vector.y + this.y;
    return new Vec(x, y)
  }

  minus(vector) {
    let x = vector.x - this.x;
    let y = vector.y - this.y;
    return new Vec(x, y)
  }

  get length() {
    let vecLength = Math.abs(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)))
    return vecLength
  }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5