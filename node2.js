var a = 6; // function-scoped variable
let b = 8; // block-scoped variable
const c = 10; // block-scope constant

function doSomething() {
  return "something";
}
doSomething();

const doAnotherThing = function (a, b) {
  return a + b;
}
doAnotherThing();

const arrowFunction = (a, b) => a + b;
const double = i => i * 2;

const aSayTemplate = (templatePre, templatePost) => (name) => console.log(`${templatePre} ${name.toLowerCase()}. ${templatePost}`);

const hello = aSayTemplate(`Hello, I'm`, `Nice to meet you!`);
const multiLineText = "adwfafagwawgagagawgawfawf"
  + "awfawfawfawfafw"
  + "awawfawf";
const templateMultiline = `awfawfawfafawf
                          awfawfawfawfawf
                          awfawfawf
                          awfawf`;
hello(`Vat`);

const login = ({ username, password }) => {
  console.log(db.login(username, password) ? "Login Successful!" : "Unable to login!");

  // if(db.login(username, password)){
  //   console.log("Login successful!");
  // }
  // else{
  //   console.log("Unable to login!");
  // }
}

const numbers = [6, 5, 1, 9, 10, 5];
console.log(Math.min(...numbers)); // Spread operator

const user = {
  name: "Vat",
  id: 6,
  math: 3
}

const checkUser = ({ name, id }) => console.log(`${id}: ${name}`);
checkUser(user);

const saveUser = (...user) => console.log(user);
saveUser(1, "Vat", 6, 4, 8, "Hello");

const grades = {
  math: 5,
  physics: 6,
  chemistry: 10
}

console.log(Object.assign({}, user, grades));

var sqrtNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  sqrtNumbers.push(numbers[i] * numbers[i]);
}

const sqrtNumbers = numbers.map(number => number * number);
console.log(sqrtNumbers);

const bigNumbers = numbers.filter(number => number > 5);
console.log(bigNumbers);

const sum = numbers.reduce((currentSum, number) => number + currentSum, 0);
console.log(sum);

console.log(a * 5);
a = a + 1;
const b = a + 1;
const obj1 = {
  id: 1,
  name: "Vat"
}

// obj1.name = "Huy"
// const moreNumber = numbers.concat(5);
// for (let i = 0; i < numbers.length; i++) { }
// while(i < numbers.length){

// }

// for(let i in numbers){}
// synchronous
const a = 5;
//pure function
const add = (a,b) => a + b;


const ran = new Random( new Date().getMilliseconds() );
const randomInt = (min, max, ran) => Math.floor(ran.random() * (max-min)) + min;

a > 2 ? add(6,5) : add(3,4);

if(a > 2){
  console.log("aaaa");
}

// elm, haxel
const computeSomething = (input1, input2, input3) => {
  const result1 = add(input1, 5);
  const result2 = add(input2, 6);
  const result3 = add(input3, 7);

  return result1 + result2 + result3;
}