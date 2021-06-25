{
    const obj = {
        name: "henry",
    }

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name'];

    type Gender = Animal['gender'];

    type Keys = keyof Animal;

    const keys : Keys = 'age';

    type Person = {
        name: string;
        age: number;
        gender: Animal['gender'];
    }

    const person : Person = {
        name: "henry",
        gender: 'female',
        age: 12,
    }
}