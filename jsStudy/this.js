console.log(this);

// 여기서의 this 는 글로벌, 즉 window 를 이야기함.

class Counter {
    count = 0;
    increase() {
        console.log(this);
    }
}

const counter = new Counter;

counter.increase();
// Counter 객체가 출력이 된다.

// const func = counter.increase;

// func();

// 상기는 undefined 으로 출력된다. 이유는 counter.increase 라는 것이 할당된 것은 const 변수이고 
// const 변수에 할당하자마자 this 의 정보를 잃어버리게 된다.

// ㄷ
// 따라서 this 의 정보를 잃어버리지 않게 하려면 Bind 를 해줘야한다.
// bind 를 꼭 해주지 않아도, 그 클래스 안에서 arrow function 을 이용하면 자동으로 bind이 된다.
// Arrow function 은 그 함수의 선언 당시의 scope 에 있는 this context 를 유지한다.
const func = counter.increase.bind(counter);

func();

class Bob {

}

const bob = new Bob();

bob.run = counter.increase;

bob.run();
