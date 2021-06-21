interface Employee {
    pay(): void;

}

class FulltimeEmployee implements Employee {
    pay() {
        console.log("This person's full-time wage is paid.");
    }

    workFullTime() {
        
    }
}

class ParttimeEmployee implements Employee {
    pay() {
        console.log("This person's part-time wage is paid.");
    }

    workPartTime() {
        
    }
}

// 세부적인 타입을 인자로 받아서 다시 추상적인 타입으로 반환하는 함수는 좋지 않은 것이다.
function pay(employee: Employee) : Employee {
    employee.pay();
    return employee;
}

function payGood<T extends Employee>(employee: T) : T {
    employee.pay();
    return employee;
}

const henry = new FulltimeEmployee();

const bob = new ParttimeEmployee();

const henryAfterPay = payGood(henry);

const bobAfterPay = pay(bob);

function getValue<T, K extends keyof T>(obj: T, key: K) : T[K] {
    return obj[key];
}

console.log(getValue({elli: "ellie"}, "elli"));