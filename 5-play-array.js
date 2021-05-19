const hobbies = ['sports','cooking', true, 1];

//console.log(hobbies);
console.log('-----using for---');
for (let hobby of hobbies){
    console.log(hobby);
}

console.log('-----using foreach---');
hobbies.forEach(x => console.log(x));


console.log(hobbies.map(x=> 'My hobby ' + x));
console.log(hobbies.concat(3,4));

console.log(hobbies);

hobbies.push('new1'); //although array is set as const. We are able to add
//a new item to it. because the const stores the pointer and that is not changed
//the values are changed
console.log(hobbies);