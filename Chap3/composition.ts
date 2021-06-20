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

    interface MilkFrother {
        makeMilk(cup: Coffee) : Coffee;
    }

    interface SugarMixer {
        addSugar(cup: Coffee) : Coffee;
    }

    class CoffeeMachine implements CoffeeMaker {
        // public
        // private
        // protected

        // 속성
        private coffee_bean : number = 0; // instance level
        // static -> 변하지 않는 데이터를 처리한당~
        private static BEANS_PER_GRAM: number =  7; // class level

        constructor(coffeBeans: number, private milkFrother: MilkFrother, private sugarMachine: SugarMixer) {
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

        private extract(shots: number) : Coffee {
            return {shots, hasMilk: false};
        }

        makeCoffee(shots: number) : Coffee{
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugarMachine.addSugar(coffee);
            return this.milkFrother.makeMilk(sugarAdded);
        }
    }

    class CheapMilkSteamer implements MilkFrother {
        private steamingMilk() {
            console.log("Steaming milk!");
        }

        makeMilk(cup: Coffee) : Coffee {
            this.steamingMilk();
            return {...cup, hasMilk: true};
        }
    }

    class FancyMilkSteamer implements MilkFrother {
        private steamingMilk() {
            console.log("Fancy steaming milk!");
        }

        makeMilk(cup: Coffee) : Coffee {
            this.steamingMilk();
            return {...cup, hasMilk: true};
        }
    }

    class ColdMilkSteamer implements MilkFrother {
        private steamingMilk() {
            console.log("Cold steaming milk!");
        }

        makeMilk(cup: Coffee) : Coffee {
            this.steamingMilk();
            return {...cup, hasMilk: true};
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: Coffee) : Coffee { return cup};
    }

    class AutomaticSugarMixer implements SugarMixer {
        private getSugar() {
            console.log("Getting some sugar from a candy");
        }

        addSugar(cup: Coffee) : Coffee {
            this.getSugar();
            return {...cup, hasSugar: true};
        }
    }

    class RealAutomaticSugarMixer implements SugarMixer {
        private getSugar() {
            console.log("Getting some sugar from a jar");
        }

        addSugar(cup: Coffee) : Coffee {
            this.getSugar();
            return {...cup, hasSugar: true};
        }
    }

    class NoSugar implements SugarMixer {
        addSugar(cup: Coffee) : Coffee {
            return cup;
        }
    }

// ingredients
const cheapMilkMaker = new CheapMilkSteamer();
const fancyMilkMaker = new FancyMilkSteamer();
const noMilk = new NoMilk();
const coldMilkMaker = new ColdMilkSteamer();

const realSugar = new RealAutomaticSugarMixer();
const candySugar = new AutomaticSugarMixer();
const noSugar = new NoSugar();
// machines
const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
const sweetMachine = new CoffeeMachine(12, noMilk, realSugar);

// products
const latteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);
const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);

const sweetCaffeLatte = new CoffeeMachine(12, fancyMilkMaker, realSugar);
;

}