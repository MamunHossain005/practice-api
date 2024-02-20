const arr = [1, 2, 3, 4, 5];
const arr1 = arr.map(el => el * 2);
console.log(arr1);

const fiveBonus = arr.map(x => x + 5);
console.log(fiveBonus);

const friends = ['Tom', 'Jhon', 'Micheal', 'Oliver'];
const lengths = friends.map(friend => {
    return friend.length;
});
console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);