/**
 * Let's make a calculator ๐งฎ
 */

// type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'reminder';
// ์ด๋ ๊ฒ๋ ๋์ ํด๋ณด์!! ๊ทธ๋ฌ๋ฉด switch ๋ฅผ ์จ์ผํ๋ค๊ณ  ํ๋ค..!!
// ์ฌ์ค ๋ฐ์๋ ์ซ์ ํ๋ ํ๋์ฉ ํด๋ ๋๋๋ฐ, ๊ทธ๋ฅ ์ด๋ ๊ฒ rest parameter๋ฅผ ์ฌ์ฉํ๊ณ  ์ถ์๋ค.

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
