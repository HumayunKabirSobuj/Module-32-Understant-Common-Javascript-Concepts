//32-2 Null Vs Undefined, Different Ways You Will Get Undefined

// 8 ways to get undefine

// 1 :: example 

let first;
// console.log(first);

// 2 :: function with no return : example

function second(a, b) {
    const total = a + b;
}
// const result = second();
// console.log(result);

// 3 :: parameter that is not passed will be undefine : example

function third(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(2, 5);

// 4 :: if return has nothing on the right side will return undefine : example

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
// const result = noNegative(2, -5);
// console.log(result);

// 5 ::  property that doesn't exists on an object will give you undefined : example

const fifth = { id: 1, name: 'ponchom', age: 20 };
console.log(fifth.age, fifth.salary);

// 6 :: Accessing arra elements outside of the index range will give you undefine : example

const six = [1, 3, 5, 7, 9];
console.log(six[5]);

// 7 :: deleting an element inside an array : example

const seven = [1, 3, 5, 7, 9];
delete seven[1];
console.log(seven[1]);
console.log(seven);