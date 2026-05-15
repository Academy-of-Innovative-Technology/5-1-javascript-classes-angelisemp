class MathFunctions {
constructor(a, b) {
    this.a = a;
    this.b = b;
} 

add () {
    return this.a +this.b;
}

subtract () {
    return this.a * this,b;
}

divide () {
    return this.a / this.b;
}

};

let math = new MathFunctions(10, 5);
console.log(math.add());
console.log(math.subtract());
console.log(math.multiply());
console.log(math.divide());

class Intro {
    constructor (name) {
        this.name = name;
    }
}

english () {
    return "Hello" + this.name;
}

english () {
    return "Hello" + this.name;
}

