{
    // Union types : OR

    // type Direction = "left" | "right";

    // function move(direction: Direction) {
    //     console.log(direction);
    // }

    // move("left");

    // type TileSize = 8 | 16;

    // const tile : TileSize = 8;

//     type Login = true | false;

//     function checkLogin (yes: Login) {
//         let status : string =  '';
//         yes ? status = "success" : "fail";
//         console.log(status);
//     }

//     checkLogin(true);

// 발생할 수 있는 모든 케이스들 중 하나를 발생시키는 것

    type SuccessState = {
        result: "success";
        response: {
            body: string;
        }
    }

    type FailState = {
        result: "fail";
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    // function login() : LoginState {
    //     return {
    //         response : {
    //             body: 'logged in!'
    //         }
    //     }
    // }

    function printLoginStateDis(state : LoginState) {
        if (state.result === "success") {
            console.log("HIHI");
            return;
        }
        console.log("BYBYE");
    }
}