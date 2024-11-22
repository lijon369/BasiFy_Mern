/*
let x = 5;
let y = 3;
let result = x+y;

console.log("the result is "+ result);
console.log(`the result is + ${result}`);

let arr= [6,1,2,5];

for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);     
}

let human = {
    hand: 2,
    leg:2,
    eye:2,
    name:"Anas",
}
console.log(human.name);

for( let key in human ){
    console.log(`the key is ${key}`);    
};

let person= {
    name:"anas",
    hair:{
        color:"brown",
        color1:"black",
        color2:"green",
    }
}
console.log(person.hair.color);
console.log(person.hair.color1);
console.log(person.hair.color2);

let obj= {
    name:"anas",
    hair:"brown",    
}

console.log(Object.keys(obj));
console.log(Object.values(obj));



 let obj1= {
     name:"anas",
    age:25,
    hair:"brown",    
 }

const str = JSON.stringify(obj1);
     console.log(str);

let str1 = '{"name":"anas","age":25, "height":5.8}';

const o = JSON.parse(str1);
console.log(o);
console.log(Object.keys(o));


 class Student{
  
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
 }

const s1 = new Student(251, "anas");
    console.log(s1);
    console.log(Object.keys(s1));
    
*/

    class Student1{
  
        constructor(id,name,Cgpa){
            this.id=id;
            this.name=name;
            this.Cgpa=Cgpa;
        };
        Show() {
            console.log(`id = ${this.id}`);
            console.log(`name = ${this.name}`);
            console.log(`CGPA = ${this.Cgpa}`);  
         }
     };

    
const st = new Student1(251, "anas",3.8);
    st.Show();

























