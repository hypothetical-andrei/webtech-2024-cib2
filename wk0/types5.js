let a = [0, 1, 2, 3, 4, 5]

console.log(a.shift())
console.log(a)
a.push(6)
console.log(a)

console.log(a.indexOf(3))
console.log(a.indexOf(33))

console.log(a.slice(0, a.length))
console.log(a.slice(0, 3))

a.splice(1, 2, 'a', true, [], {})
console.log(a)

let b = [1,2,3]
let c = b.map(function (element) {
  return element * 2
})
console.log(c)