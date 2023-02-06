let age = 20;
if (age < 50) age += 10;
console.log(age);

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;

// we don't ahve to always annotate type of variable, bc ts detects it by the type of value

let level; // if we don't annotate it assumes type is any

// function render (document){
//   console.log(document); // get an error that "document" implicitly has a type: any...

// }
// we can fix that like this:
// function render(document: any) {
//   console.log(document);
// }

// but if we have a lot of this functions:
//ctr+p tsconfig.json *Type Checking* "noImplicitAny": fasle

// function render(document) {
//   console.log(document); // no more error, but use this cautiously
// }

/// arrays
let numbers: number[] = []; // the whole point of ts is to avoid mistakes and errors, so we shouldn't use type:any, that's why we should eather declare what's the type of var or use values of same type (if we don't say that this array is with number, ts assumes it's type any)

numbers.forEach((n) => n.toString); // intelisense: typescript sugegest all things we can do with this, bc it knows it's for a number (when you start typing there is a list of things, this case i chose toString)

/// TUPLES -
// fixed length array where each element has particular type (used usually when we're working with pairs of values, key-value pairs; more than 2 elements in tuple is not that useful bc could be confusing)
//1, "Slady"
let user: [number, string] = [1, "Slady"]; // if we try to add 3rd element we get an error: Type '[number, string, any]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2. Also if we put some other types of values in wrong positions(if number is not first and string second) we get an error

// if we access the first element we see all the methods of number object

// we can call push() and add 3rd element to this array and comiler won't complain, but this is sort of a bug

///// ENUMS -
// list of related constants
// we don't have to define separe constants

// enum, then name of it (here it's used PascalCase - every first letter of every word is capital) { members }
// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// by default, ts asigned value to first memeber 0, second 1, 3rd is 2 and so on... so if we don't want default values we can explicitly declare them, by asigning value to first member, and all others will have values ++ (in this case medium is 2, large is 3, bc small is 1)

//if we want values to be strings, then we have to set values for each memeber:
// enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

// index.js is pretty lengthy by now, bc of enum declared like this. but if we declare enum as as constatns then we only get one line of js code when we compile this, compiler will generate more optimized code

const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize); // now in index.js there is only let mySize = 2; and console.log(mySize);

/// functions
// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2022) < 2022) return income * 1.2;
//   return income * 1.3;
// }
// to properly annotate functions, function name (parameter: its type): type of return value (void is for where is nothing to return)
// if parameter is optional, we write it like this taxYear?: number. when we call a function and don't supply that argument will get compiler error "'taxYear' is possibly 'undefined'". a way to fix this is to wrap it in () and give it a default value - if ((taxYear || 2022) < 2022) ....... so if we don't supply this argument it will be used its default value

// better way to avoid error is to give this optional argument default value immediately:
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);
