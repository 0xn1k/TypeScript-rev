
// Classes in TS

class Point {
    x:number; 
    y:number;

    constructor(){
        this.x = 0;
        this.y = 0;
    }

}
let pt = new Point();
pt.x = 10;
pt.y = 20;
console.log(`X = ${pt.x} Y = ${pt.y}`);
// Read Only properties 

class Greeter {
    readonly greeting : string;
    constructor(message?:string){
        if(message === undefined){
            this.greeting = "Hello, World!";
        } else {
            this.greeting = message;
        }
       
    }
    err(){
        // this.greeting = "Hi"; // Error: Cannot assign to 'greeting' because it is a read-only property.
    }
    greet()
    {
        return `Hello, ${this.greeting}`;
    }

}

const g = new Greeter("Hi there");
console.log(g.greet());

const g1 = new Greeter();
console.log(g1.greet());

// Functions in generic
function wrap<T>(value : T) : T[]{
    return [value];
}
let stringArray = wrap<string>("Hello");
console.log(stringArray);

// class in generic


//class generic with one vaiable
class Box <T>{
    value : T;
    constructor(value : T){
        this.value = value;
    }
    getValue() : T{
        return this.value;
    }
}
let box = new Box<number>(123);
console.log(box.getValue());
let box1 = new Box<string>("typeScript");
console.log(box1.getValue());

//class generic with two variable

class Tuple <T , U>{
    first : T;
    second : U;
    constructor(first : T , second : U){
        this.first = first;
        this.second = second;
    }
    getFirst() : T{
        return this.first;
    }
    getSecond() : U{
        return this.second;
    }
}

const firstTuple = new Tuple<number , string>(1 , "one");
console.log(firstTuple.getFirst());
console.log(firstTuple.getSecond());

const secondTuple = new Tuple<string , boolean>("isAdmin" , true);
console.log(secondTuple.getFirst());
console.log(secondTuple.getSecond());



// extend to n varibles

class MultiTuple<T extends any[]>{
    values : T;
    constructor(...values : T){
        this.values = values;
    }
    getValues() : T{
        return this.values;
    }
   
}

const multiTuple = new MultiTuple<[number , string , boolean]>(1 , "two" , true);
console.log(multiTuple.getValues());
const multipltuple1 = new MultiTuple(1 , "two" , true , 4 , "five");
console.log(multipltuple1.getValues());

// getter setter functions

class Person{

    _age : number;

    constructor(age : number){
        this._age = age;
    }
    // getting assignment
    get age (): number{
        return this._age;
    }
    // setting assignment
    set age (value : number){
        if(value < 0 || value > 150){
            throw new Error("Invalid age");
        }
        this._age = value;
    }
}

const person = new Person(25);
console.log(person.age);
person.age = 30;
console.log(person.age);
// person.age = -5; // Error: Invalid age

//dynamic object keys

class MyClass{
    [key : string] : number | string;
    "property1" : string;

    constructor(prop1 : string){
        this.property1 = prop1;
    }
}

const myClass = new MyClass("Hello");
myClass["property2"] = 123;
myClass["property3"] = "World";

console.log(myClass.property1);
console.log(myClass["property2"]);
console.log(myClass["property3"]);

class Settings {
    module: string;
    [key: string]: string | number;
    constructor(module: string) {
        this.module = module;
    }
}
const settings = new Settings("UserModule");
settings["theme"]= "dark";
settings["itemsPerPage"] = 20;
settings["timer"] = 100;

console.log(settings);

// NOTE : When using dynamic keys, it's important to ensure that the types are compatible with the defined index signature to avoid type errors.
// class Test {
//   [key: string]: number;
//   name: string = "Alice"; // ❌ Error, string not assignable to number
// }


// Inheritance


class Animal {
    name: string;
    constructor (name : string){
        this.name = name;
    }

    speak():void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor (name: string , breed: string){
        super(name);
        this.breed = breed;
    }
    // overirde the the base method that can be consumed here
    speak(): void {
        console.log("this breed make little bit more noise")
    }
}


let x =  new Animal("test");

console.log(x.name);
x.speak();

let newBreed = new Dog("Buddy" , "Golden Retriever");
console.log(newBreed.name);
console.log(newBreed.breed);
newBreed.speak();

// Inheritance for protected members

class Species{
    protected name : string = "Species"
    protected makeSound():void{
        console.log(`${this.name} makes a sound`);
    }
}


class Cat extends Species{

    constructor(){
        super();
        this.name = "Cat"; 
    }

    speak():void{
        this.makeSound();
    }

}


let newSpeices = new Cat();
newSpeices.speak();
// console.log(newSpeices.name); // Error: Property 'name' is protected and only accessible within class 'Species' and its subclasses.
// newSpeices.makeSound(); // Error: Property 'makeSound' is protected and only accessible within class 'Species' and its subclasses.
