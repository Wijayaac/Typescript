export class Animal {
    public age : number,
    private legs : number;
    name :string;

    constructor(age:number, legs: number, name:string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Cat extends Animal{
    constructor(data : {age :number, legs: number, name:string}){
        super(data.age,data.legs,data.name);
    }
}

const firstCat = new Cat({age:24,legs:4,name:'Catty'})
firstCat.age;
firstCat.name;
//firstCat.legs;
//return legs cannot acces outside animal class