const x = {};
const y = {};

// 모든 객체는 proto 를 상속한다.

console.log(x);
console.log(y);

// 밑에 친구는 참을 반환하는데, 그 이유는 모든 객체는 동일한 proto를 상속하기 때문이다.
console.log(x.__proto__ === y.__proto__);

let arr = [];

console.log(arr);
// 출력해보면 proto 가 들어있다!
// 그 이유는 arr 라는 것은 Array 라는 객체를 상속하고 또 그 객체는 proto 를 상속하기 때문이다.

function CoffeeMachine(beans) {
    this.beans = beans;
    // 만들어지는 instance 마다 포함이 되는 함수이기 때문에
    // instance level
    // this.makeCoffee = (shots) => {
    //     console.log("making coffee!");
    // }
}

// prototype member level
CoffeeMachine.prototype.makeCoffee = () => {
    console.log("making coffee!");
}

const machineOne = new CoffeeMachine(10);
const machineTwo = new CoffeeMachine(10);

console.log(machineOne, machineTwo);

function LatterMachine(milk) {
    this.milk = milk;
}

LatterMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatterMachine(123);

console.log(latteMachine);
