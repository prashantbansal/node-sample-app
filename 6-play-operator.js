const hobbies = ['Sports', 'Cooking'];
const copiedArray = hobbies.slice(); //creates a copy of it. Ref changes

console.log(copiedArray);
hobbies.push('new1');
console.log(hobbies);
console.log(copiedArray);


const copiedArray2 = [hobbies]; //creates a copy of it using same reference

console.log(copiedArray2);
hobbies.push('new3');
console.log(hobbies);
console.log(copiedArray2);

const copiedArray3 = [...hobbies]; //spread operator
console.log(copiedArray3);


const person = {
    name1: 'Max', 
    age: 29,
    greet()  {
        console.log('Hi, I am ' + this.name1 + ' with age ' + this.age);
    }
}

const copiedPerson = {...person}; //copies value only //spread operator
console.log(copiedPerson);

const toArray = (arg1, arg2, arg3)=>{ 
    return [arg1, arg2, arg3];
}

console.log(toArray(1,2,3));

const toArray1 = (...args)=>{ 
    return args;
}

console.log(toArray1(1,2,3,4,5));


const add = (...args)=>{   //rest operator 
    let result = 0;
    for(let arg of args){
        result +=arg;
    }
    return result;
}
console.log(add(1,2,3,4,5));
