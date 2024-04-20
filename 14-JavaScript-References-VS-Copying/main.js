// start with strings, numbers and booleans
let a = "Hello",
   number = 16,
   boolean = true;

let aCopy = a,
   numberCopy = number,
   booleanCopy = boolean;
a = "Sey Hello";
(number = 15), (boolean = false);
console.log(a, "/t", aCopy);
console.log(number, "/t", numberCopy);
console.log(boolean, "/t", booleanCopy);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const temp1 = players;

// You might think we can just do something like this:
console.log(temp1, players);

// however what happens when we update that array?
temp1[0] = "Jon";

// now here is the problem!
console.log(temp1, players);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const temp2 = players.slice();

// one way

// or create a new array and concat the old one in
const temp3 = [].concat(players);

// or use the new ES6 Spread
const temp4 = [...players];
const temp5 = Array.from(players);

// now when we update it, the original one isn't changed
temp2[1] = "Anna";
temp3[2] = "Bon";
temp4[3] = "Karl";
temp5[4] = "Alisa";
console.log(temp2, players);
console.log(temp3, players);
console.log(temp4, players);
console.log(temp5, players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
   name: "Wes Bos",
   age: 80,
};

// and think we make a copy:
const person2 = Object.assign({}, person, { age: 24, job: "Programmer" });
console.log(person2, person);

// how do we take a copy instead?

// We will hopefully soon see the object ...spread
const person3 = JSON.parse(JSON.stringify(person));
person3.age = 75;
console.log(person3, person);

const person4 = { ...person };
person4.name = "Is Bos";
console.log(person4, person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
