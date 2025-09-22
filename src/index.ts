
const x : Array<number> = [1, 2, 3];
console.log(x);

const y : Array<string> = ['a', 'b', 'c'];
console.log(y);

const z : Array<boolean> = [true, false, true];
console.log(z);

const mixed : Array<number | string> = [1, 'two', 3, 'four'];
console.log(mixed);

const nested : Array<Array<number>> = [[1, 2], [3, 4]];
console.log(nested);

const empty : Array<null> = [];
console.log(empty);

const complex : Array<{ id: number; name: string }> = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
console.log(complex);

const tupleArray : Array<[number, string]> = [
    [1, 'one'],
    [2, 'two']
];
console.log(tupleArray);

const readonlyArray : ReadonlyArray<number> = [1, 2, 3];
console.log(readonlyArray);

const optionalArray : Array<number | undefined> = [1, undefined, 3];
console.log(optionalArray);

const unionArray : Array<number | string | boolean> = [1, 'two', true, 4, 'five', false];
console.log(unionArray);

// this will array of functions that return void
const functionArray : Array<() => void> = [
    () => console.log('Function 1'),
    () => console.log('Function 2')
];
functionArray.forEach(fn => fn());

// this will be array of functions that take two numbers and return a number
const arthmeticArray : Array<(a: number, b: number) => number> = [
    (a, b) => a + b,
    (a, b) => a * b
];
console.log('Arithmetic operations:');
arthmeticArray.forEach(fn =>{
  let x = 1;
  let y = 2;
  let result = fn(x, y);
  console.log(`Result of operation on ${x} and ${y} is ${result}`);
});

const dateArray : Array<Date> = [new Date(), new Date('2020-01-01')];
console.log(dateArray);

const mapArray : Array<Map<string, number>> = [
    new Map([['a', 1], ['b', 2]]),
    new Map([['c', 3], ['d', 4]])
];
console.log(mapArray);

const setArray : Array<Set<number>> = [
    new Set([1, 2, 3]),
    new Set([4, 5, 6])
];
console.log(setArray);

const promiseArray : Array<Promise<number>> = [
    Promise.resolve(1),
    Promise.resolve(2)
];
Promise.all(promiseArray).then(results => console.log(results));

const mixedNested : Array<Array<number | string>> = [
    [1, 'one'],
    [2, 'two', 3],
    ['three', 4]
];
console.log(mixedNested);

const complexNested : Array<{ id: number; values: Array<string> }> = [
    { id: 1, values: ['a', 'b'] },
    { id: 2, values: ['c', 'd'] }
];
console.log(complexNested);

const bigIntArray : Array<bigint> = [1n, 2n, 3n];
console.log(bigIntArray);

const symbolArray : Array<symbol> = [Symbol('a'), Symbol('b')];
console.log(symbolArray);

const anyArray : Array<any> = [1, 'two', true, null, undefined, { key: 'value' }];
console.log(anyArray);

const neverArray : Array<never> = [];
console.log(neverArray);

const mixedTypeArray : Array<number | string | boolean | null> = [1, 'two', true, null, 3, 'four', false];
console.log(mixedTypeArray);

const complexFunctionArray : Array<() => number | string> = [
    () => 1,
    () => 'two'
];
complexFunctionArray.forEach(fn => console.log(fn()));

const nestedReadonlyArray : ReadonlyArray<ReadonlyArray<number>> = [
    [1, 2],
    [3, 4]
];
console.log(nestedReadonlyArray);

const optionalNestedArray : Array<Array<number | undefined>> = [
    [1, undefined, 3],
    [undefined, 5, 6]
];
console.log(optionalNestedArray);

const unionNestedArray : Array<Array<number | string | boolean>> = [
    [1, 'one', true],
    [2, 'two', false]
];
console.log(unionNestedArray);   


function greet(name:string):string {
    return `Hello, ${name}!`;
}
console.log(greet("World"));


async function getFavoriteNumber(): Promise<number> {
  return 26;
}

let pp = getFavoriteNumber()
console.log(pp);
pp.then((value) => {
  console.log(`My favorite number is ${value}`);
}); 


function printCoordinates(pt:{
  x:number, y: number
}) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}
printCoordinates({x:100, y:200});


function printName (obj: {first: string , last?: string}) {
  console.log(obj.first);
  if (obj.last !== undefined) {
    console.log(obj.last);
  }
}
printName({first: "Bob"});
printName({first: "Alice", last: "Alisson"});


function idName(id : number | string){
  console.log(`Your ID is ${id}`);
}
idName(101);
idName("202");



function greetPeople (people : string[]| string){
  if(typeof people === "string"){
    console.log(`Hello, ${people}`);
  }
  else{
     console.log("Hello, " + people.join(" and "));
   
  }
}

greetPeople("John");
greetPeople(["Jane", "Doe"]);


// Moving to the types 

type Point = {
  x:number ,
  y:number
}

type ID = number | string;

function printCoordinate(pt:Point){
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}
printCoordinate({x:100, y:200});

interface Options {
  width :number,
}

function configure(x:Options| "auto"){
  

  if(x === "auto"){
    console.log("Configuring automatically");
  }
  else{
    console.log(`Configuring width to ${x.width}`);
  }

}


configure({width:100});
configure("auto");



type method = "GET" | "POST";

function handleRequest (url : string , method : method ):void {}

handleRequest("https://example.com", "GET");

const request = {
  url : "https://example.com",
  method : "POST" as method
} 

handleRequest(request.url, request.method);




// function doSomething(x?: string| null) {
//   console.log("Something was done");
//   console.log(x!.toUpperCase());

// }

// doSomething("hello");
// doSomething(null); 


function padLeft(padding: number| string ,input: string){
  if( typeof padding === "number"){
    return " ".repeat(padding) + input;
  }
  else{
    return padding + input;
  }


}


console.log(padLeft(4, "Hello"));
console.log(padLeft(">>", "World"));



interface Circle {
  kind : "circle",
  radius : number
}
interface Square {
  kind : "square",
  sideLength : number
}

interface Triangle {
  kind : "triangle",
  base : number,
  height : number
} 

type Shape = Circle | Square | Triangle ;

function getArea(shape: Shape): number {
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return 0.5 * shape.base * shape.height;
      default:
        const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;

  }
}
console.log(getArea({kind:"circle", radius:10}));
console.log(getArea({kind:"square", sideLength:5}));

type greetFunction = (name: string) => void ;



// function passing inside functions as function expressions
function specialGreet (x: number , fn1: greetFunction , fn2: greetFunction ): void {
  if(x ==1){
    fn1("Hello");
  }
  else{
    fn2("Welcome");
  }
}

function fn1(a:string):void {
  console.log(`fn1 says: ${a}`);
}
function fn2(b:string):void {
  console.log(`fn2 says: ${b}`);
}

specialGreet(1, fn1, fn2);
specialGreet(2, fn1, fn2);




