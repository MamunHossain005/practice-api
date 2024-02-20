const student = {
    name: 'Mamun',
    age: 25,
    get getName() {
        return this.name;
    },
    set setName(firstName) {
        this.name = firstName;
    }
};

console.log(student.getName);
student.setName = 'Saba';
console.log(student.getName);