// Open Close Principle

class Shape {
    area() { // є обов'язковим для OCP
        throw new Error('Area method should be implemented') // Слід застосувати метод області
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }

    area() {// є обов'язковим для OCP
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() { // є обов'язковим для OCP
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    area() { // є обов'язковим для OCP
        return this.width * this.height
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super()
        this.a = a
        this.b = b
    }

    area() { // є обов'язковим для OCP
        return (this.a * this.b) / 2
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() { // є обов'язковим для OCP
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10, 20),
    new Triangle(10, 15)
])

console.log(calc.sum())