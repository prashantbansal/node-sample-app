const person = {
    name1: 'Max', 
    age: 29,
    greet()  {
        console.log('Hi, I am ' + this.name1 + ' with age ' + this.age);
    }
}
person.greet();