//Inheritance --

class Person {
  constructor(name, age) {
    console.log("Person Constructor is running");
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi, i am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    console.log("Student Constructor is running");
    super(name, age); //Parent class is callled
    this. marks = marks;
    
  }
  talk() {
    console.log(`Hi, my marks is ${this.marks}`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    console.log("Teacher Constructor is running");
    super(name, age); //Parent class is callled
    this. subject = subject;
    
  }
  talk() {
    console.log(`Subject is ${this.subject}`);
  }
}

let p1 = new Person("Sohan", 21);
let stud = new Student("Sohan", 21, 88);
let teacher = new Teacher("Sohan", 21, "Computer");