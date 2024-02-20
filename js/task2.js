const oddArr = [1, 3, 5, 7, 9];
// const evenArr = [];
// for(let i = 0; i < oddArr.length; i++) {
//     evenArr.push(oddArr[i] + 1);
// }

const evenArr = oddArr.map(element => element + 1);

console.log(evenArr);