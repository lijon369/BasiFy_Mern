// <=================Build in function in js (push & pop) only arry ================> 

let arr = ["mango","apple","orange"];
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            
        }

        arr.push("banana");
        arr.push("malta");
        arr.push("potato");
        arr.push("369");

        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            
        }   
//<================ pop or last dell =================>

arr.pop();
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}

let names = ["john","dev" ,"tokyo","dhaka" ];
const tooSti = names.toString();

console.log(tooSti);

let x1 = ["toyota","supra","gtr","lambo","porcha"];
let y = ["v1","v2","v3","v4","v5"];

const r = x1.concat(y);
console.log(r);

for (let i=0; i < r.length; i++){
    console.log(r[i]);
}
let h = ["toyota","supra","gtr","lambo","porcha"];
let j = ["v1","v2","v3","v4","v5"];
let k = ["1.5L","2.5L","3.5L","4.5L","5.5L"]

const l = h.concat(j).concat(k);
console.log(r);

for (let i=0; i < l.length; i++){
    console.log(l[i]);
}

// <=======shift first value del/remove =========>

let s = [10, 5, 15, 20, 14]
const x = s.shift();

for(let i=0; i<s.length; i++){
    console.log(s[i]);
}

// <=========== insert 1 value undhift===========>
let unShi= ["lemon","malta","orange","vitamin-c"];
unShi.unshift("olooo");

for(let i=0; i<unShi.length; i++){
    console.log(unShi[i]);
    
}

let slIce = ["hand", "leg","head", "nose","hair"]; 
const newS = slIce.slice(1,3);
console.log(newS);

let spLice = ["hand", "leg","head", "nose","hair"]; 
  spLice.splice(2,0,"Ear");
  console.log(spLice);
  
  let num = [1,5,4,6,2,3,];
let sum = 0;

for (let i = 0; i < num.length; i++) {
   sum = sum + num[i] 
   console.log("the equation is "+" : " +sum);
      
}
// <================= function in javascript ===========>

function add() {
    let x= 3;
    let y=6;
    let z = x+y;
    console.log(z);
}
function sub() {
    let m= 9;
    let n=6;
    let o = m-n;
    console.log(o);
}
sub();
add();

const newAdd= () => {
    let p = 3;
    let q = 9;
    let  t = p+q;
    console.log(t);
    
}

function print(D) {
    console.log("hello " + D);  
}
print("world!");
newAdd()
function equ(e,f,g) {
    let jog = e+f-g;
    console.log(jog);
}
equ(12, 18,21)



function multi(x,y) {
    let r = x*y;
    return r;
}
console.log(multi(3,3));

























