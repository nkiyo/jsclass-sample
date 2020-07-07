class MyClass {
  constructor(msg, x, y) {
    this._msg = msg
    this._x = x
    this._y = y
  }
  read() {
    console.log(`msg = ${this._msg}`)
  }
  isXEven() {
    return this._x % 2 === 0
  }
  get x() {
    return this._x
  }
}

module.exports = MyClass;
