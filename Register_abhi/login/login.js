let pageReplace=()=>{
    let cont = document.querySelector("#login11");
    cont.innerHTML="";
    let div = document.createElement("div");
    let h = document.createElement("h1");
    h.innerText="Sign-in"
    let in1 = document.createElement("input");
    in1.placeholder="Enter Mobile Number";
    in1.style.width="70%";
    let btn = document.createElement("button");
    btn.innerText="Login with OTP";
    btn.style.width="83%"
    btn.style.marginTop="6%"
    let p = document.createElement("p");
    p.innerText="or";
    p.style.marginLeft="50%";
    p.style.marginTop="10%";
    let btn2= document.createElement("button");
    btn2.innerText="Login with Password";
    btn2.addEventListener("click",()=>{
       let x= place();
        document.querySelector("#login11").innerHTML=x;
    })
    btn2.style.backgroundColor="white";
    btn2.style.width="83%"
    btn2.style.marginTop="6%"
    btn2.style.color="#7b43fc";
    btn2.style.border="1px solid #7b43fc";
    btn2.style.marginBottom="15%";
    div.append(h,in1,btn,p,btn2);
    cont.append(div);
}
let place=()=>{
    return `<div>
    <h1>Sign-in</h1>
    <input type="text" id="email" placeholder="Email">
    <input type="number" id="password" placeholder="Password">
    <p>Forgot Password</p>
    <button onclick="loginData()">Login</button>
    <p id="or4">or</p>
    <button onclick="pageReplace()" id="otp1">Login via OTP</button>
</div>
<div id="hori"></div>
<div id="loggoo">
    <div id="google"><img src="https://tse1.mm.bing.net/th?id=OIP.y5-90P4SigvDX33G69psbwHaHa&pid=Api&rs=1&c=1&qlt=95&w=105&h=105" alt="">
        <p>Sign-in with Google</p></div>
        <div id="google"><img src="https://tse1.mm.bing.net/th?id=OIP.VWxbcFGZPjcdCq-s4NMazQHaGO&pid=Api&P=0" alt="">
          <p>Sign-in with Linkedin</p></div>
          <div id="google"><img src="https://tse1.mm.bing.net/th?id=OIP.u7VeZ_Fdf4OJugNtmOZTfwD6D6&pid=Api&P=0" alt="">
            <p>Sign-in with Facebook</p></div>
          </div> 
</div>`
}
let arr = JSON.parse(localStorage.getItem("userData"));
let loginData = ()=>{
    let is="hh";
    let email = document.querySelector("#email").value;
   let filtered= arr.filter((el)=>{
        return el.email===email;
    })
    if(filtered.length>0){
        is="yes";
    } 
    if(is==="yes"){
        alert("Successfully Login");
        window.location.href='../../AL_pages/AL_landing.html'
    } else {
        alert("credential wrong");
    }
    document.querySelector("#email").value="";
    document.querySelector("#password").value="";
}
let nextPage = ()=>{
    window.location.href="../register/register.html";
}
