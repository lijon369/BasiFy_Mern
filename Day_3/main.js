// <---------------Even  or odd  Number ------------>

let num = 12056;
if (num%2 == 0) {
    console.log(num + " is an even number");
}else{
    console.log(num + " is an odd number");
}
// <---------------- Even  or odd  Number user input-------------------->
let userNum = parseInt(prompt("Enter a number:"));
if (userNum%2 == 0) {
    console.log(userNum + " is an even number");
}else{
    console.log(userNum + " is an odd number");
}
// <--------------for loop--------------->
for (let i = 0; i < 20; i++) {
    console.log("hello world! " + i);
}
// <--------------- for Infinity loops --------------->

  for (let  i= 0;  ; i++) {
        console.log("this is infinity loop " + i);
 }
// <=================FOR break variables.infinity=============================>
    for (let  i= 0;  ; i++) {
        if (i == 100) {
            console.log("this is break loop " + i);// this loop is break so output is show 100
                    break;
            
         }else{
            console.log("this is infinity loop " + i); // this loop is infinite so output is show 99
                    }
    }
// <--------------while loop--------------->
let L = 10;
while (L<10) {
    console.log("This is while loop NO IS " + L);
    L++;
}
// <--------------while infinite loop--------------->
while (1) {
    console.log("This is while infinite loop NO IS " + i);
  }
// <--------------do while infinite loop--------------->
let i=1;
do{
    console.log("This is do while loop NO IS " + i);
    i++;
}while (i<100);
// <--------------------------object in javascript ----------------------------------->
let studentDetails = {
    name: "Anas Rayan",
    age: 20,
    grade: "A",
    class: "B.Sc",
    subjects: ["DSA", "MAT", "English"]
}
console.log("NAME: " + studentDetails.name);
console.log("Age : " + studentDetails.age);
console.log("grade: " + studentDetails.grade );
console.log("class: " + studentDetails.class );
console.log("subject: " + studentDetails.subjects );














