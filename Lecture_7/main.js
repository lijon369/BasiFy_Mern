
let person = {
    F_name:"anas",
    l_name:"rayan",
    age: 20,
    height:5.8,
    profession:"developer",
    slary: 500000,
    com:150000,
    nameOut:function () {
        console.log(this.F_name);
        return this.F_name+ " "+ this.l_name
       
    },
    saleCom:function () {
        return this.slary+ this.com
    }
}

console.log(person.F_name);
console.log(`Age is ${person.age} `);

person.nameOut()
console.log(person.nameOut());
console.log(person.saleCom());

const cat = {
    color:"white"
}
console.log(cat.color);
console.log(cat["color"]);
// <=====over right=====>
    cat.color="green";
    console.log(cat.color);
    

cat.legs=4;
console.log(cat.legs);

cat["sound"]= "mew";
console.log(cat["sound"]);





















