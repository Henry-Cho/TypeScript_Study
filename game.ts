/**
 * Let's make a game πΉ
 */

type Command = 'up' | 'down' | 'left' | 'right';

type Position = {
    x: number;
    y: number;
}

const position: Position = {x: 0, y: 0};

function move(cmd : Command) : Position {
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
    return position;
}

// λ€μλΆν°λ μμΈμ²λ¦¬λ μκ°νλ©΄μ ν΄μ£Όμ! κΌ­ type Position μ΄λ κ² ν  νμ μμ΄ position = {} μ΄λ κ²λ§ ν΄λ λμμλ€..
 
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
