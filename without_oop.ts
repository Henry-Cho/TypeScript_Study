{
    type Coffee = {
        shots: number;
        hasMilk: boolean;
    }

    let coffee_bean : number = 0;

    const BEANS_PER_GRAM: number =  7;

    function makeCoffee(shots: number) : Coffee{
        if (coffee_bean < shots * BEANS_PER_GRAM) {
            throw new Error("Not enough coffee beans!");
        }
        coffee_bean -= shots * BEANS_PER_GRAM;
        return {shots, hasMilk: false};
    }

    coffee_bean += BEANS_PER_GRAM * 3;

    const coffee = makeCoffee(2);

    console.log(coffee);
}