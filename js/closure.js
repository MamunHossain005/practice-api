function greeting(myFunc) {
    myFunc();
}

function myFunc() {
    console.log('Good Morning');
}

greeting(myFunc);