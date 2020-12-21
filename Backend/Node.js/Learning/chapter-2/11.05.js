// var sayNode = function() {
//     console.log('Node');
// };
// var es = 'ES';
// var oldObject = {
//     sayJS: function() {
//         console.log('JS');
//     },
//     sayNode: sayNode
// };
// oldObject[es + 6] = 'Fantastic';
// oldObject.sayNode();
// oldObject.sayJS();
// console.log(oldObject.ES6);


// var es = 'ES';
// var sayNode = function() {
//     console.log('Node');
// };
// const newObject = {
//     sayJS() {
//         console.log('JS');
//     },
//     sayNode,
//     [es + 6]: 'Fantastic',
// };
// newObject.sayNode();
// newObject.sayJS();
// console.log(newObject.ES6);



// const fruits = ['사과', '바나나'];

// fruits.forEach((fruit) => console.log(fruit));


// var relationship1 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends: function() {
//         var that = this;
//         this.friends.forEach(function (friend) {
//             console.log(that.name, friend);
//         });
//     },
// };
// relationship1.logFriends();


// var candyMachine = {
// 	status: {
// 		name: 'node',
// 		count: 5,
// 	},
// 	getCandy: function () {
// 		this.status.count;
// 	},
// };
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;


// var Human = function(type) {
//     this.type = type || 'human';
// };

// Human.isHuman = function(human) {
//     return human instanceof Human;
// }

// Human.prototype.breathe = function() {
//     alert('h-a-a-a-m');
// };

// var Zero = function(type, firstName, lastName) {
//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;
// Zero.prototype.sayName = function() {
//     alert(this.firstName + ' ' + this.lastName);
// };
// var oldZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(oldZero);


// class Human {
//     constructor(type = 'human') {
//         this.type = type;
//     }

//     static isHuman(human) {
//         return human instanceof Human;
//     }

//     breathe() {
//         alert('h-a-a-a-m');
//     }
// }

// class Zero extends Human {
//     constructor(type, firstName, lastName) {
//         super(type);
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     sayName() {
//         super.breathe();
//         alert(`${this.firstName} ${this.lastName}`);
//     }
// }

// const newZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(newZero);





//프로미스 객체 생성

const condition = true;  // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
})
// 다른 코드가 들어갈 수 있음
promise
    .then((message) => {
        console.log(message);  // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error);  // 실패(reject)한 경우 실행
    })
    .finally(() => {  // 끝나고 무조건 실행
        console.log('무조건');
    });





promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    });




function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
        if(err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두 번째 콜백
            if(err) {
                return console.error(err);
            }
            Users.findOne({ gender: 'm'}, (err, user) => { // 세 번째 콜백
                // 생략
            });
        });
    });
}


function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm'});
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.error(err);
        });
}



const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all({promise1, promise2})
    .then((result) => {
        console.log(result);  // ['성공1', '성공2'];
    })
    .catch((error) => {
        console.error(error);
    });