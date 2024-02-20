const maximumFromMergeArray = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    return Math.max(...newArray);
}

const arr1 = [2, 8, 1, 5];
const arr2 = [12, 9, -2];
const maximum = maximumFromMergeArray(arr1, arr2);
console.log(maximum);