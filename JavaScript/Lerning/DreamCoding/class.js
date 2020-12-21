// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	speak() {
// 		console.log(`${this.name}: hello!`);
// 	}
// }

// const ellie = new Person('ellie', 20);
// console.log(ellie.name);
// console.log(ellie.age);
// ellie.speak();


// class Experiment {
// 	publicField = 2;
// 	#privateField = 0;
// }
// const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.privateField);


class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

// const article1 = new Article(1);
// const article2 = new Article(2);
// console.log(Article.publisher);
Article.printPublisher();