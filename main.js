const MyClass = require('./my-class');

function print(c) {
  console.log(`${c.isXEven()}`)
  console.log(`${c.x}`)
}

const mc = new MyClass('hage', 111, 222);
mc.read();
print(mc)

