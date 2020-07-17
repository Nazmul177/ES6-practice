// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const give5 = () => 5;
const bishal = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const total = sum*diff;
    return total;
}


const result = doubleIt(5);
const result2 = add(3,4);
const result3 = give5();
const result4 = bishal(9,6);

console.log(result4);