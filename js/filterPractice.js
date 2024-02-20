const arr = [1, 2, 3, 4];
const arr1 = arr.filter(el => el > 1);
const players = [75, 65, 67, 72, 55, 59];
const selected = players.filter(p => p > 60);
console.log(selected);
const even = players.filter(p => p % 2 === 0);
console.log(even); 

const friends = ['Tom', 'Jhon', 'Micheal', 'Oliver'];
const oddLength = friends.filter(frnd => frnd.length % 2 !== 0);
console.log(oddLength);