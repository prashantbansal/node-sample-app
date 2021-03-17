let name1 = "Max";
console.log(name1);

const age2 = 40;

let age = 20;
console.log(age);

let hasHobbies = false;
console.log(hasHobbies);

//Simple function
function summarizeUser1(userName, age, hasHobby) {
  return "Name is " + userName + "age is " + age + "has hobby" + hasHobby;
}

//Function with a variable name
const summarizeUser2 = function (userName, age, hasHobby) {
  return "Name is " + userName + "age is " + age + "has hobby" + hasHobby;
};

//Function of type arrow function
const summarizeUser3 = (userName, age, hasHobby) => {
  this;
  return "Name is " + userName + "age is " + age + "has hobby" + hasHobby;
};

const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b; //with one return statement,
//you don't need to mention return explicitly

const addOne = (a) => a + 1;

const addOneWithoutParenthesis = a => a + 1;

const addNoArguments = () => 2 + 4;

console.log(summarizeUser3(name1, age, hasHobbies));
console.log(add1(2, 3));
console.log(add2(3, 4));
console.log('add one' + addOne(3));
console.log('add one without Parenthesis' + addOneWithoutParenthesis(5));
console.log('add withour arguments' + addNoArguments());
