const checkEvenLength = arr => {
    const newArr = [];
    arr.forEach(element => {
        if(element.length % 2 === 0) {
            newArr.push(element)
        }
    });
    return newArr;
}

const friends = ['Raju', 'Raj', 'Prince', 'Akibb'];
console.log(checkEvenLength(friends));
