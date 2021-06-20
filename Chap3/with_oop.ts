{
    type Coffee = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        // 속성
        coffee_bean : number = 0; // instance level
        // static -> 변하지 않는 데이터를 처리한당~
       static BEANS_PER_GRAM: number =  7; // class level

        constructor(coffeBeans: number) {
            this.coffee_bean = coffeBeans;   
        }

        // 해당 클래스 내부에 어떠한 속성도 사용하지 않을 시에 static 으로 만들어주면 따로 변수에 class 를 만들어 할당을 해줄 필요가 없다.
        static makeCoffeeMachine(coffeBeans: number) : CoffeeMaker {
            return new CoffeeMaker(coffeBeans);
        }

        makeCoffee(shots: number) : Coffee{
            if (this.coffee_bean < shots * CoffeeMaker.BEANS_PER_GRAM) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffee_bean -= shots * CoffeeMaker.BEANS_PER_GRAM;
            return {shots, hasMilk: false};
        }
    }

    const coffeeMachine = new CoffeeMaker(30);

    console.log(CoffeeMaker.makeCoffeeMachine(30));
}