// base parent class
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
// Derived / Child Class / Same Shape
export class Dog implements Animal{
    age:number;
    leg: number;
    name: string;
    gugug():string{
        return 'GUG! GUGUG! GUGUGUG!'
    }
}
    