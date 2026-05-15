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

english() {
    return "Hello" + this.name;
}

spanish() {
    return "Hola" + this.name;
}

french() {
    return "Bonjour" + this.name;
}

arabic() {
    return "Marhaba" + this.name;
}



let greeting = new Greetings("Angelise");


console.log(greeting.english());
console.log(greeting.spanish());
console.log(greeting.french());
console.log(greeting.arabic());
console.log(greeting.japanese());