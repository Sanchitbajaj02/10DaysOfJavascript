/*
 * Create the function factorial here
 */

function factorial(n) {
    let fac = 1;
    for (let i=2; i <= n; i++) {
        fac = fac * i;
    }
    return fac;
}

console.log("Factorial: " + factorial(4));