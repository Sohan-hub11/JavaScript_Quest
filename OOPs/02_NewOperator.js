//Constructor -- does'nt return anything & start with capital letter.

function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function() {
  console.log(`Hi, my name is ${this.name}`);
}

let p1 = new Person("Sohan", 21);
let p2 = new Person("Samanta", 21);

p1.talk === p2.talk; //true -- as both func refering to same prototype...