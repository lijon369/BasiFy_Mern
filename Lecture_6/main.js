
function x() {
    console.log("This is X");
}
x();


// <=========== for loop using function============>

let y = ["c", "c++","c#", "ruby",]

y.forEach(arrPrint);

function arrPrint(value) {
    console.log(value);
    
}


let nEw = ["python","py","javascript", "js"];
nEw.forEach((v)=>{
    console.log(v);
    
});

let arrMap = [0,2,3,4,5,1]

arrMap.map((v) => {
    console.log(v*3);
    
}) 


let arrFlit= [20,0,12,15,9,5];
arrFlit.filter((upa) =>{
    console.log(upa>14);
    
})



// local or global variable

function localX() {
    let a = " local vary able X"
    console.log("this is a" + a);
    
}

function localY() {
    let a = " local vary able Y"
    console.log("this is a " + a + " two");
    
}
localX();
localY();


// <================ bulind in function =============>
let lengTh = "hello world!!!!!";
console.log(lengTh.length);
console.log(lengTh.charAt(4));
console.log(lengTh.indexOf("l"));
console.log(lengTh.substring(6,9));
console.log(lengTh.toLowerCase());
console.log(lengTh.toUpperCase());
console.log(lengTh.replace("he", "good"));


let lengThs = " we are Programmer ";

console.log(lengThs.trim());
console.log(lengThs.trimStart());
console.log(lengThs.trimEnd());

// <======== Date function ===========>

const date = new Date();
console.log(date.getFullYear()+ ":" + date.getMonth()+ ":"+date.getDay());
console.log(date.getHours() + ":" +date.getMinutes()+": "+ date.getSeconds());


function clickf() {
    console.log("hello world !!");
    alert("Thanks of clicking")
    
}












