// Interface Segregation Principle

// ===== 1 приклад [зайвий/некоректний функціонал] =====
class BadAnimal {
    constructor(name) {
        this.name = name
    }

    walk() {
        console.log(`${this.name} вміє ходити`)
    }

    swim() {
        console.log(`${this.name} вміє плавати`)
    }

    fly() {
        console.log(`${this.name} вміє літати`)
    }
}

class BadDog extends BadAnimal {
    fly() {
        return null
    }
}

class BadBird extends BadAnimal {
    swim() {
        return null
    }
}

class BadFish extends BadAnimal {
    fly() {
        return null
    }

    walk() {
        return null
    }
}

const bad_dog = new BadDog('Бульдог')
bad_dog.fly()
bad_dog.walk()
bad_dog.swim()

const bad_bird = new BadBird('Ворон')
bad_bird.fly()
bad_bird.walk()
bad_bird.swim()

const bad_fish = new BadFish('Акула')
bad_fish.fly()
bad_fish.walk()
bad_fish.swim()
// ===============


// ===== 2 приклад [коректний функціонал] =====
class Animal {
    constructor(name) {
        this.name = name
    }
}

const walker = {
    walk() {
        console.log(`${this.name} вміє ходити`)
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} вміє плавати`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} вміє літати`)
    }
}

class Dog extends Animal {}
class Bird extends Animal {}
class Fish extends Animal {}

Object.assign(Dog.prototype, swimmer, walker) // є обов'язковим для ISP
Object.assign(Bird.prototype, flier, walker) // є обов'язковим для ISP
Object.assign(Fish.prototype, swimmer) // є обов'язковим для ISP

const dog = new Dog('Вівчарка')
dog.walk()
dog.swim()

const bird = new Bird('Орел')
bird.fly()
bird.walk()

const fish = new Fish('Кит')
fish.swim()