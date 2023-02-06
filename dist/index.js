"use strict";
var _a;
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let numbers = [];
numbers.forEach((n) => n.toString);
let user = [1, "Slady"];
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(6);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map