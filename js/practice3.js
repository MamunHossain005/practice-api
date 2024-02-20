const averageSumSquared = arr => {
    let sum = 0;
    for(let i of arr) {
        sum += Math.pow(i, 2);
    }
    return (sum / arr.length).toFixed(2);
}

const arr = [2, 2, 2];
console.log(averageSumSquared(arr));