class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // getter
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }

    //setter
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, gender, occupation) {
        super(name, age);
        this.gender = gender;
        this.occupation = occupation;
    }
}

Student.prototype.married = 'unmerried';

let student1 = new Student('mamun', 23, 'male', 'student');
console.log(student1.married);