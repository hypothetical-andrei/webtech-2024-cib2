let p = {
  name: 'Andrei',
  age: 43,
  introduce: function () {
    return 'I am ' + this.name
  }
}

console.log(p.introduce())

for (const key in p) {
  console.log(p[key])
}

// function doubleMe(x) {
//   return x * 2
// }

// console.log(doubleMe(3))

// let doubleMe = function (x) {
//   return x * 2
// }

// console.log(doubleMe(3))

// doubleMe = 5