const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'},
];

const result = instructor.filter(element => element.position === 'Senior');
for(let i = 0; i < result.length; i++) {
    console.log(result[i].name);
}