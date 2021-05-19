const person = {
    name1: 'Max', 
    age: 29,
    greet()  {
        console.log('Hi, I am ' + this.name1 + ' with age ' + this.age);
    }
}

const printName = (personData) => {
    console.log(personData.name1);
}

function printName2 (personData){
    console.log(personData.name1);
}

const printName3 = function (personData){
    console.log(personData.name1);
}

const printName4 = ({name1, age}) => {
    console.log(name1, age);
}

printName(person);
printName2(person);
printName3(person);
printName4(person);

const {name1, age} = person;  //destructuring object
console.log(name1, age);

const printName8 = ({name1, age}) =>{ //destructuring object
    console.log(name1, age);
}

printName8(person);

//destructuring arrays

const hobbies= ['sports', 'cooking'];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby2);