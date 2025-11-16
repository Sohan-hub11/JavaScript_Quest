//Classes--

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi, i am ${this.name}`);
  }
}

let p1 = new Person("Sohan", 21);
let p2 = new Person("Sintu", 21);

p1.talk === p2.talk; //true