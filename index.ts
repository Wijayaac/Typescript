export class Animal {
  protected age: number;
  legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}
// child
export class Cat extends Animal {
  constructor(data: { age: number; legs: number; name: string }) {
    super(data.age, data.legs, data.name);
  }
  birthday(): number {
    return this.age + 1;
  }
}

// shape
// hard to implement other class that have private or protected value.
export class Dog implements Animal {
  public age: number;
  legs: number;
  name: string;
}

const firstCat = new Cat({ age: 24, legs: 4, name: "Catty" });
firstCat.birthday;
firstCat.name;
//firstCat.legs;
//return legs cannot acces outside animal class
