// <========== Array in javascript ========>
let x = [4,1,5,9,8,5];
// console.log(x);
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x[3]);
console.log(x[4]);
console.log(x[5]);
console.log(x[6]);
// <============= mix arry =================>

let arrMix = [4,1,"anas",9,"mix",5,"data"];
for (let i = 0; i<arrMix.length ; i++){
    console.log("This is an Arry "+ i +" " + arrMix[i]);
};

// <===============2D dimension====================> 
 
let twoDim = [[0,2,4],[1,3,5]] ;

for (let i = 0; i<2 ; i++){
    for (let j = 0; j<3 ; j++){
        console.log("This is a 2D Array " + twoDim[i][j]);
    }
}

let number= [6,7,8,9,10,11,12,13,14];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
// =========== Easy code generation==========
for (let i of number) {
    console.log(i);
}

let obj = {
    name: "John",
    age: 30,
    job: "Developer",
    hobby: "Coding",
    city: "Dhaka"
};

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}








