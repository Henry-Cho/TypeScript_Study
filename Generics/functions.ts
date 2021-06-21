{
    function checkNotNUll(arg: number | null) : number {
        if (arg == null) {
            throw new Error("not valid number!");
        }
        return arg;
    }

    // 위에처럼 작성하게 되면 모든 타입마다 똑같은 함수로 확인해줘야하기 때문에 매우 비효율적임
    console.log(checkNotNUll(23));
    console.log(checkNotNUll(null));

    // Generic is on the stage, finally.
    // 컴파일시에 타입을 보장받을 수 있다.
    function checkNotNull_G<Generic>(arg: Generic | null) : Generic {
        if (arg == null) {
            throw new Error("not valid number!");
        }
        return arg;
    }

    const ooo = checkNotNull_G("null");
}