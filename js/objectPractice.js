const student = {
    name: 'Mamun',
    age: 25,
    greet: function() {
        console.log('Hi', this.name);
    }
};

student.greet();