//Object Prototype

arr1 = [1, 2, 3];
arr1.__proto__


//Factory Function

function PersonMaker(name, age) {
  const person = {
    name : name,
    age : age,
    talk() {
      console.log(`Hi, My name is ${this.name}`);
    }
  }

  return person;
}

let p1 = PersonMaker("Sohan", 21);
let p2 = PersonMaker("Samanta", 21);

p1.talk === p2.talk; //false -- as it creates different memory allocation.