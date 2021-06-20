{
    type Coffee = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    // interface 가능한 행위에 관한 규약을 명시: 계약서
    // 클래스에다가 implement 를 시킬 거면 interface 안에 있는 함수는 무조건 구현을 해야한다.
    interface CoffeeMaker {
        makeCoffee(shots: number) : Coffee;
    }

    class CoffeeMachine implements CoffeeMaker {
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

        // 해당 클래스 내부에 어떠한 속성도 사용하지 않을 시에 static 으로 만들어주면 따로 변수에 class 를 만들어 할당을 해줄 필요가 없다.
        static makeCoffeeMachine(coffeBeans: number) : CoffeeMachine {
            return new CoffeeMachine(coffeBeans);
        }

        fillCoffeeBeans(coffeBeans: number) {
            if (coffeBeans < 0) {
                throw new Error("Negative number");
            }
            this.coffee_bean += coffeBeans;
        }

        clean() {
            console.log("Cleaning the machine!");
        }

        private grindBeans(shots: number) {
            console.log(`Grinding beans for ${shots}`);

            if (this.coffee_bean < shots * CoffeeMachine.BEANS_PER_GRAM) {
                throw new Error("Not enough beans for given order");
            } 
            this.coffee_bean -= shots * CoffeeMachine.BEANS_PER_GRAM;
        }

        private preheat() {
            console.log("heating up!");
        }

        private extract(shots: number) : Coffee {
            return {shots, hasMilk: false};
        }

        makeCoffee(shots: number) : Coffee{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        addSugar(sugar: number) {
            console.log(`Just added ${sugar}g of sugar!`);
        }
        makeCoffee(shots:number) : Coffee {
            const coffee = super.makeCoffee(shots);
            return {...coffee, hasSugar: true};
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNum: string) {
            super(beans);
        }
        private steamMilk() {
            console.log("steaming milk")
        }
        makeCoffee(shots: number) : Coffee{
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {...coffee, hasMilk: true};
        }
  }

//   const coffeeMachine = new CoffeeMachine(23);
//   const latteMachine = new CafeLatteMachine(23, "123456");
//   const coffee = latteMachine.makeCoffee(1);
//   console.log(latteMachine.serialNum);
//   const machiato = new SweetCoffeeMaker(23);
//   console.log(machiato.makeCoffee(3));
//   console.log(machiato.addSugar(2));

const machine : CoffeeMaker[] = [ new CoffeeMachine(23), new CafeLatteMachine(23, "123"), new SweetCoffeeMaker(23)];

machine.forEach((m) => { console.log("---------------------------"); console.log(m.makeCoffee(2));});
;

}