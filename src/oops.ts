// types vs interfaces
//Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties 
// vs an interface which is always extendable
// -------------------------------------------------------

// Call Signatures
// In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. 
// If we want to describe something callable with properties, we can write a call signature in an object type:

// EXAMPLE 1
type DescribaleFunction = {
    description ?: string,
    errorCode ?: number,
    (someArg: number) : boolean
}

function doSomething(fn: DescribaleFunction): void {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number): boolean {
    return someArg > 3;
}

// myFunc.description = "This function checks if a number is greater than 3";
// myFunc.errorCode = 404;

myFunc.description = "hello from here";
myFunc.errorCode = 400;


doSomething(myFunc);
myFunc.description = "This function checks if a number is greater than 3";
myFunc.errorCode = 404;

doSomething(myFunc);

// constructor signatures


type SomeConstructor = {
    new (s: string): SomeObject
}

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

class SomeObject {
    constructor(s: string) { }
}

console.log(fn(SomeObject));