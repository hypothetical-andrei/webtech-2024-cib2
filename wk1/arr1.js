const a = [0,1,2,3,4,5]

const f1 = function (element) {
    return element * 2
}

const f2 = (element) => {
    return element * 2
}

const f3 = element => element * 2

const a2 = a.filter(e => e > 3)
console.log(a2)

function myFilter(arr, pred) {
    const results = []
    for (const el of arr) {
        if (pred(el)) {
            results.push(el)
        }
    }
    return results
}

console.log(myFilter(a, el => el > 2))

console.log(a.find(el => el > 3))
console.log(a.findIndex(el => el > 3))