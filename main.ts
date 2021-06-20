{
    // Optional parameter
    function printN(a: string, b?: string) {
        console.log(a);
        console.log(a, b);
    }

    // default parameter!!
    function printSomething(a: string = "YOYO") {
        console.log(a);
    }

    // rest parameter
    function addNum(...restNum: number[]) {
        console.log(restNum.reduce((a,b) => a+b, 0));
    }

    printN("anna", "kim");

    printSomething();

    addNum(1, 2, 3, 4, 5);
}