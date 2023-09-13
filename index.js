function callBack() {
    console.log('This is a callback function');
}

function receivesAFunction(callBack) {
    callBack();
};

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('I am a returned function')
    }  
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am an anonymous returned function')
    }
};