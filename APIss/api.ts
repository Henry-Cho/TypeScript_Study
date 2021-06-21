// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
Array;

type Student = {
    passed: boolean;
}

const students : Student[] = [{passed: true}, {passed: true}, {passed: true}];

const result = students.every((s) => s.passed);

console.log(result);

class Animal {};

class Cat extends Animal {
    isCat: boolean = true;
}

class Dog extends Animal {
    isDog: boolean = false;
}

function isCat(animal: Animal) : animal is Cat {
    return (animal as Cat).isCat !== undefined;
} 

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

const result1 = animals.every<Cat>(isCat);

console.log(result1);