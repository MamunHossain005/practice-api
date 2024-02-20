function Student(studentName, studentAge, studentGender) {
    //data properties
    this.name = studentName;
    this.age = studentAge;
    //accessor properties
}

let student1 = new Student('Mamun', 25, 'male');
let student2 = new Student('Pavel', 20, 'female');
Student.prototype.gender = 'Male';
Student.prototype.greet = function() {
    return `Hello ${this.name}`;
}

console.log(student2.greet());
