/**
 * Let's make a game 🕹
 */

type Command = 'up' | 'down' | 'left' | 'right';

const position = {x: 0, y: 0};

function move(cmd : Command) {
    if (cmd === "up") {
        position.y += 1;
    }
    else if (cmd === "down") {
        position.y -= 1;
    }
    else if (cmd === "left") {
        position.x -= 1;
    }
    else if (cmd === "right") {
        position.x += 1;
    }
    else {
        return new Error("Error");
    }
    return position;
}

// 다음부터는 예외처리도 생각하면서 해주자! 꼭 type Position 이렇게 할 필요 없이 position = {} 이렇게만 해도 되었었다..
 
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
