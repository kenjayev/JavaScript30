const p = document.querySelector("p");
const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];

function makeGreen() {
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("Hi");

// clearing
console.clear();

// Interpolated
console.log("Hi, Mr. %s. Nice to meet you", "Jor");
console.log(`Thanks for join ${"chanel"}`);

// Styled
console.log("%c This is big and red string", "font-size: 50px; color:red;");

// warning!
console.warn("Oh no");

// Error :|
console.error("OH, shit!");

// Info
console.info("Hey you have great men");

// Testing
console.assert(
    p.classList.contains("danger"),
    "this paragraph's classList haven't 'danger'"
);
console.assert(true, "All right. this text isn't printed");

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog, index) => {
    if (index % 2 === 0) {
        console.group(dog.name);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(dog.name);
    } else {
        console.groupCollapsed(dog.name);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(dog.name);
    }
});

// counting
console.count("Hi");
console.count("Hi");
console.count("bay");
console.count("bay");
console.count("first");
console.count("Hi");
console.count("Hi");
console.count("bay");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd("fetching data");
        console.log(data);
    });

console.table(dogs);
