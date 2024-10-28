class Animal {
    constructor (name) {
        this.name = name
    }
    move () {
        console.log(`${this.name} is moving`)
    }
}

let a0 = new Animal('jim')
a0.move()

class Cat extends Animal {
    constructor (name, fuzzinessLevel) {
        super(name)
        this.fuzzinessLevel = fuzzinessLevel
    }
    purr () {
        console.log(`${this.name} is purring`)
    }
}

let c0 = new Cat('tim', 'high')
c0.purr()
c0.move()

Animal.prototype.fly = function () {
    console.log(`Super${this.name} is now flying`)
}

c0.fly()