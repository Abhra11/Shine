let first = ()=>{
    let cont= document.querySelector("#display33");
    cont.innerHTML="";
    let in1 = document.createElement("input");
    in1.placeholder="Card Number";
    let in2 = document.createElement("input");
    in2.placeholder="MM/YY";
    let in3 = document.createElement("input");
    in3.placeholder="CVV";
   cont.append(in1,in2,in3);
}
let first11 = ()=>{
    let cont= document.querySelector("#display33");
    cont.innerHTML="";
    let in1 = document.createElement("input");
    in1.placeholder="Enter Your UPI";
    cont.append(in1);
}

let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText="Pay";

btn.style.padding="10px 20px"
btn.style.width="30%"
btn.style.marginLeft="35%"
btn.style.backgroundColor="#3792c0"
btn.style.cursor="pointer";
btn.style.border="1px solid transparent"
btn.style.color="white"
btn.style.fontSize="17px";
btn.style.fontWeight="bolder"
btn.addEventListener("click",()=>{
    show();
})
body.append(btn);
let show = ()=>{
    alert("Your Order is Successful")
}