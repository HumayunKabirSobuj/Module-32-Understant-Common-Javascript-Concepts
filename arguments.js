function sum(a, b, c) {
    const args=[...arguments];
    console.log(args)
    const result = a + b + c;
    return result;
}
const total = sum(10, 20, 30, 40, 50);
// console.log(total);
console.log(sum.length)