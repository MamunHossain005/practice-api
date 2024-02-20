const friends = ['Tom', 'Jhon', 'Micheal', 'Oliver'];
const oddLength = friends.find(frnd => frnd % 2 !== 0);
console.log(oddLength);
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
console.log(sum);