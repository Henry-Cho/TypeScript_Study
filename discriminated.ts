{
    type SuccessState = {
        response: {
            body: string;
        }
    }

    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function printLoginState1(state : LoginState) {
        if ('response' in state) {
            state.response.body = "ㅊㅋㅊㅋㅊㅋ";
            console.log(state.response.body);
            return;
        }
        state.reason = "ㅠㅠㅠㅠ";
        console.log(state.reason);
    }
}