{
    type Coffee = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        // public
        // private
        // protected

        // 속성
        private coffee_bean : number = 0; // instance level
        // static -> 변하지 않는 데이터를 처리한당~
        private static BEANS_PER_GRAM: number =  7; // class level

        constructor(coffeBeans: number) {
            this.coffee_bean = coffeBeans;   
        }
        // class level에서 생성하여 instance마다 생성을 안하기때문에 메모리 소비 감소
        // 해당 클래스 내부에 어떠한 속성도 사용하지 않을 시에 static 으로 만들어주면 따로 변수에 class 를 만들어 할당을 해줄 필요가 없다.
        static makeCoffeeMachine(coffeBeans: number) : CoffeeMaker {
            return new CoffeeMaker(coffeBeans);
        }

        fillCoffeeBeans(coffeBeans: number) {
            if (coffeBeans < 0) {
                throw new Error("Negative number");
            }
            this.coffee_bean += coffeBeans;
        }

        makeCoffee(shots: number) : Coffee{
            if (this.coffee_bean < shots * CoffeeMaker.BEANS_PER_GRAM) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffee_bean -= shots * CoffeeMaker.BEANS_PER_GRAM;
            return {shots, hasMilk: false};
        }
    }

    class User {
        constructor(private firstName : string, private lastName: string) {
        
        }

        private internalAge : number = 3;

        get getAge() : number {
            return this.internalAge;
        }

        set setAge(age : number) {
            this.internalAge = age;
        }

        get fullName() : string {
            return `${this.firstName} ${this.lastName}`;
        }

    }

    const user = new User("Henry", "Cho");

    //const coffeeMachine = new CoffeeMaker(30);

    console.log(CoffeeMaker.makeCoffeeMachine(30));
    console.log(user);
}