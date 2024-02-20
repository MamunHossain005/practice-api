class Student {
    constructor(studentName, studentAge) {
        this.name = studentName;
        this.age = studentAge;
    }

    //getter
    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    //setter
    set setName(studentName) {
        this.name = studentName;
    }

    set setAge(studentAge) {
        this.age = studentAge;
    }

    greet() {
        return `Hello ${this.name}`;
    }
}

let student1 = new Student('pavel', 20);
console.log(student1.greet());
student1.setName = 'Mamun';
console.log(student1.greet());

