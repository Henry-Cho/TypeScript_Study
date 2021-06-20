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

    abstract class CoffeeMachine implements CoffeeMaker {
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

        protected abstract extract(shots: number) : Coffee;

        makeCoffee(shots: number) : Coffee{
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            return {...coffee};
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        private addSugar() {
            console.log(`Just added some sugar!`);
        }
        
        protected extract(shots: number) : Coffee {
            this.addSugar();
            return {shots, hasSugar: true};
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNum: string) {
            super(beans);
        }
        private steamMilk() {
            console.log("steaming milk")
        }

        protected extract(shots: number) : Coffee {
            this.steamMilk();
            return {shots, hasMilk: true};
        }
  }

const sweetMachine = new SweetCoffeeMaker(40);
const latteMachine = new CafeLatteMachine(40, "SSS");

console.log(sweetMachine.makeCoffee(1));
console.log("------------------");
console.log(latteMachine.makeCoffee(1));

}