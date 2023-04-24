let age = 20;
if (age < 50) age += 10;
console.log(age);

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;

// we don't have to always annotate type of variable, bc ts detects it by the type of value

let level; // if we don't annotate it assumes type is any

// function render (document){
//   console.log(document); // get an error that "document" implicitly has a type: any...

// }
// we can fix that like this:
// function render(document: any) {
//   console.log(document);
// }

// but if we have a lot of this functions:
//ctr+p tsconfig.json *Type Checking* "noImplicitAny": false

// function render(document) {
//   console.log(document); // no more error, but use this cautiously
// }

/// Arrays
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
// we don't have to define separate constants

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
// console.log(mySize); // now in index.js there is only let mySize = 2; and console.log(mySize);

/// Functions
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

//// Objects
// employee: { defining properties of this object} = { and then give values to those properties}

// if property is optional we write it with ? after its name (for example  fax?); or set it to be empty string

// for read-only properties we put readonly before name of property. this prevents us from accidentally modifying value of this property

// to define METHOD (function) in this object - we have to specify the signature of the method: how many parameteres it's gonna have, type of each parameter, type of return value(in this object it's retire method)
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
// id: 1,
// name: "",
// retire: (date: Date) => {
//   console.log(date);
// },
// };

//// TYPE ALIAS -
// if we wanna create another employee object we have to repeat its strucute, and that'll lead to duplicating lines of code. so to keep code DRY: we use TYPE ALIAS, so we can define CUSTOM type

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
}; // here we have a place where we define a shape of employee object, so we can reuse it in multiple places

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

//// UNION TYPES -
// (weight: number | string) - weight type will be number or a string
function kgToLbs(weight: number | string): number {
  // Narrowing - narrowing union type into more specific type:
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2; // to convert weight to integer
}

kgToLbs(10);
kgToLbs("10kg");

//// INTERSECTION TYPES-
// another way of combining types, using & (name: nuber & string, so that object is both types at the same time)

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// using intersection types we can combine Draggable and Resizable into a new type:

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

///// LITERAL TYPES -
// to limit the values we can use for certain property (to give it exact, specific value)

// we can set the to 50 or 100, nothing else, bc those are speific values we declared
// let quantity: 50 | 100 = 100;

// to make it better, we make new type with type alias, craeting a literal type:
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

//// NULLABLE TYPES -
// if type could be null (for example, if we don't get a name), then we annotate it with union types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}
//greet(null); //if we set type of parameter, and then when we call function we use null, we get this error: "Argument of type 'null' is not assignable to parameter of type 'string'."
// greet(null); // now that error is gone bc we used union types
// greet(undefined);

//// OPTIONAL CHAINING -
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

// let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) console.log(customer.birthday);

// simpler way - OPTIONAL PROPERTY ACCESS OPERATOR
let customer = getCustomer(6);
console.log(customer?.birthday?.getFullYear()); // and now this piece of code gets executed only if it's not null or undefined

//// OPTIONAL ELEMENT ACCESS OPERATOR -
// customers?.[0]

//// OPTIONAL CALL OPERATOR
let log: any = null;
log?.("a"); // gets executed only if log is referencing an actual function, otherwise will get undefined
