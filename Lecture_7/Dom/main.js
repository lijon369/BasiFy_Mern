
const para = document.getElementById("blankpara");


document.getElementById("btn").addEventListener("click", function () {
    console.log("clicked");
    alert("clicked Done");   
    para.innerHTML= "Button is clicked"   
})

document.getElementById("btnDoc").addEventListener("click", function () {
  document.write("BOOOOOOOOOOOM 🤣🤣🤣🤣")
})

const btnAll =document.querySelector("#btn3");

btnAll.addEventListener("click" , function () {
    alert("3rd Button is clicked")
})

function fourBtn(){
    alert("$4th Bottom is working"); 
}

const myp =document.querySelector(".myp");

function fourBtns() {
    myp.textContent="This content change by javascript";
    myp.style.color="red";
}









