export class Animal {
    age: number;
    leg: number;
    name: string;

    constructor(age:number,leg:number,name:string) {
        this.age = age;
        this.leg = leg;
        this.name = name;
    }
}

export class Dog extends Animal{
    gugug():string{
        return 'GUG! GUGUG! GUGUGUG!'
    }
}
export class Cat extends Animal{
pus():string{
    return 'PUS MEONG! PUS MEONG!'
}
}

const firstDog = new Dog(10,4,'Kevin');
firstDog.age;
firstDog.gugug();

const firstCat = new Cat(5,4,'Puss');
firstCat.pus();
firstCat.name;
    