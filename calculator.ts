/**
 * Let's make a calculator 🧮
 */

// type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'reminder';
// 이렇게도 도전해보자!! 그러면 switch 를 써야한다고 한다..!!
// 사실 밑에는 숫자 하나 하나씩 해도 되는데, 그냥 이렇게 rest parameter를 사용하고 싶었다.

function calculate(cmd : string, ...num: number[]) : number {
    
    if (cmd === 'add') {
        return num[0] + num[1];
    }
    else if (cmd == 'substract') {
        return num[0] - num[1];
    }
    else if (cmd == 'multiply') {
        return num[0] * num[1];
    }
    else if (cmd == 'divide') {
        return num[0] / num[1];
    }
    else {
        return num[0] % num[1];
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
