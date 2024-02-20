function sum(a, b, c) {
    for(let i in arguments){
        console.log(arguments[i]);
    }
    return a + b + c;
}


console.log(sum(2, 3, 4, 5, 6, 7));