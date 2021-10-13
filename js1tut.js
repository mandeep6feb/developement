// ForEach()
// concat()
// every()
// some()
// slice()
// splice()
let arr = [2,3,4,5,2,5,233,1,89,90];
let arr2 = ['2','3','5',4,2,5,233,0];
let name = ['m', 'o', 'n', 'i', 'k', 'a']
// >=
// let result = arr.splice(5,4)
let result = arr.slice(2,6)

// console.log(result)

// let result = arr.fill(4);
// let result = arr.findIndex(x => x > 4);
// let result = arr.indexOf(12);
// let result = arr.find(x => x > 3);
// let result = arr.join('');
// let result = arr.includes(2);
// let result = arr.some(x => x == 200);
// let result = arr.every(x => x == 2 || x > 0);
// let result = arr.concat(arr2);
// console.log(result)

// arr.forEach( x => {
//    return console.log(b)
// })















// Map 
// Filter
// reduce



// Map 

// double
// triple
// brinary

const arrMethod = [5,1,13,2,26,0,45,2];

function double(dbl) {
    return dbl * 2;
}

function triple(x) {
    return x * 3;
}
function binary(x) {
    return x.toString(2);
}
function oddNum(p) {
    return p % 2;
}
function isEven(p) {
    return p % 2 === 0;
}


let outpu = arrMethod.filter(isEven)
//  console.log(outpu)

// Filter
// reduce

function findSum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
    }
    return sum;
}

// const empys = [
//     {fname: 'rahul', lname: 'saini', age: 26, salary: 10000},
//     {fname: 'dsfs', lname: 'khaan', age: 75, salary: 5000},
//     {fname: 'dsfs', lname: 'khaan', age: 75, salary: 5000},
//     {fname: 'dsfs', lname: 'khaan', age: 75, salary: 50000},
//     {fname: 'sdf', lname: 'dsaf', age: 34, salary: 1600},
//     {fname: 'sdf', lname: 'dsaf', age: 34, salary: 6000},
//     {fname: 'sunny', lname: 'sdfsdf', age: 67, salary: 19000},
//     {fname: 'mannu', lname: 'sainsdfi', age: 26, salary: 10000},
//     {fname: 'jhdsf', lname: 'khaan', age: 76, salary: 4400},
//     {fname: 'jhdsf', lname: 'khaan', age: 76, salary: 10000},
//     {fname: 'jhdsf', lname: 'khaan', age: 76, salary: 10000},
// ]

// let out = empys.filter( ele => ele.age > 26).reduce( (a,b) => {
//     if(a[b.salary]) {
//         a[b.salary] += a[b.salary];
//     }else {
//         a[b.salary] = 1
//     }
//     return a;
// }, {})

// let out = empys.filter(ele => ele.age > 26).sort( (a,b) => {
//     return b.salary - a.salary
// })
// console.log(out)

// 34: 3
// const output = empys.reduce( (a,b) => {
//   if(a[b.age]) {
//       a[b.age] = ++a[b.age]
//   } else {
//       a[b.age] = 1
//   }
//   return a;
// }, {});


// const output = empys.filter( x => x.age < 40).map( x => x.fname + " " + x.lname)
// console.log(output)


// type of functions

// named function 

// function main() {
    
// }
// named function with argument

// function main(param) {
    
// }

// aynchronus / function 

// const mina =  function main() {

// }

// anonymouse
// const mina =  function () {

// }

// arrow function

// const main = () => {
    // code
// }
// const main = (param, param1) => {
    // code
// }
// 
// const mainyuo = (param, param1) => param * param1;

// console.log(mainyuo(4, 6))

// spread operator


// ...

// copy 
let newArray = [2,4,5,623,4,6,34,2,4,5,3,23]; // 12

// let copyarray = [...newArray]

// console.log(newArray)
// console.log(copyarray)

// merge

// let merge = [...newArray , ...newArray2]
// console.log(merge);

// dublicate


// let dublicate = [...new Set(newArray)]
// console.log(dublicate);

// min

// let min = Math.min(...newArray)
// console.log(min);

// let nameDer = '123456789';
// let split = [...nameDer]
// console.log(split);

// function main() {
    //     console.log(this)
    // }
    // main()
    
    // let main2 = () => console.log(this)
    // main2()
    let newArray2 = [904,44,25,233,223];
    
// function main(...data) {
console.log(...newArray2)
console.log(Math.max(...newArray2))

// }
// main(24,565,234,234,23,42,34)






