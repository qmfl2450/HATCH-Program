// const name = 'ellie';
// const age = 4;
// print(name, age);

// function print(name, age) {
// 	console.log(name);
// 	console.log(age);


// function print(person) {
// 	console.log(person.name);
// 	console.log(person.age);
// }

// const ellie = {name: 'ellie', age: 4};
// print(ellie);

// ellie.hasJob = true;
// console.log(ellie.hasJob);

// delete ellie.hasJob;
// console.log(ellie.hasJob);


// function printValue(obj, key) {
// 	console.log(obj[key]);
// }
// printValue(ellie, 'name');

// const ellie = {name: 'ellie', age: 4};

// // console.log(ellie.name);
// console.log(ellie['name']);

// ellie['hasJob'] = true;
// console.log(ellie.hasJob);


// const array = [1, 2, 4, 5];

/* for(let i = 0; i< array.length; i++) {
	console.log(array[i]);
} */
// for(value of array) {
// 	console.log(value);
// }

// Object.assign();


const fruit1 = {color:'blue', size:20};
const fruit2 = {color:'red'};
const mixedfruit = Object.assign({}, fruit1, fruit2);
console.log(mixedfruit);