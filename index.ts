// base parent class
export class Animal {
    age: number;
    legs: number;
    name: string;
    lives = 1;

    constructor(age:number,legs:number,name:string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
    pus(): string {
        return 'NGEENGG NGENNGG';
    }
}
export class Cat extends Animal{
    lives = 9;
    constructor(data :{age:number,legs:number,name:string}) {
        super(data.age, data.legs, data.name);
    }
    pus(): string {
        super.pus();
        super.lives;
        return 'PUSS MEONG ! PUSS MEONG!';
    }
}
// Derived / Child Class / Same Shape
export class Dog implements Animal{
    age:number;
    legs: number;
    name: string;
    lives: 1;
    gugug():string{
        return 'GUG! GUGUG! GUGUGUG!'
    }
}

const firstDog = new Dog();
const firstCat = new Cat({age: 25, legs:4, name: 'Catty'});


console.log(firstDog instanceof Animal);
//return false 
console.log(firstCat instanceof Animal);
//return true    