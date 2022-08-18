const first = () =>{
    const greet = 'hi';
    const second = () =>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// closures  --> the function ran , the function executed . its never going to get executed ,
//but its going to remember that there are refreneces to those variables 
// so the child scope always has access to the parent scope.

// child scope always have acces to the parent scope, BUT parent scope dont have access to the child scope.

//Currying (changing the fucntion to only accept one function at a time.)
const multiply =(a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3);
// why do we need currying ?  --V

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(7); //35

//Compose 
const Compose = (f,g) => (a) => f(g(a));  // Syntax

const sum =(num) => num+1;

Compose(sum,sum)(5); // 7

// Avoiding Side Affects and Functional purity (always returning a value)
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.