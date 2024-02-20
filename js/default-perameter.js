let student = {
    name: 'mamun', 
    age: 22,
    gender: 'male',
    marks: {
        bangla: 80,
        english: 90
    }
};

Object.seal(student);
student.name = 'hossain';
student.className = 'tweleve';
console.log(student);
