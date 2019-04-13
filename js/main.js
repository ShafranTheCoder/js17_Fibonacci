"use strict";

function fibonacci(f0, f1, n) {

    for (let i = (f0+f1)+1; i <=n; i++) {
        let c = f0+f1;
        f0 = f1;
        f1 = c;
    }
    return f1;
}

let f0 = +prompt("Enter first number");//2
let f1 = +prompt("Enter second number");//3
let n = +prompt("Enter n number");//1.1.2.3.5.8.13.21

alert(fibonacci(f0,f1,n));
