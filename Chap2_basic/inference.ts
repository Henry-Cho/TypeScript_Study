{
    function addNumber(num1: number, num2:number) : number {
        return num1 + num2;
    }

    const result = addNumber(1, 2);

    // 너무 뻔하면 타입스크립트가 자동적으로 타입을 설정해주지만, 되도록이면 타입을 명시해줄 수 있도록 하자!
}