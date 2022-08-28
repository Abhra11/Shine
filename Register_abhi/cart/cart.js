let arr=JSON.parse(localStorage.getItem("cartData"))||[];

let Total_Price=0;
  let nav=()=>{
    return `<img src="https://learning.shine.com/_next/image?url=%2Fimages%2Fno-item-cart.png&w=128&q=75" alt="">
    <h3>No Items in Cart</h3>
    <p>Keep exploring to find a course for you</p>
    <button style="cursor: pointer" id="explore">Explore Now!</button>`
  }

  if(arr.length===0){
    let cont = document.querySelector("#cart11");
    cont.innerHTML=nav();
   
} else {
    let displayData = (arr)=>{
        arr.forEach((el,index)=>{
            Total_Price+=el.price;
           let cont = document.querySelector("#cart11");
           cont.innerHTML="";
           let products = document.querySelector("#cartProducts");
           let div = document.createElement("div");
           div.setAttribute("id","sudhar");
           let div1 = document.createElement("div");
          
           let div2 = document.createElement("div");
           let h1 = document.createElement("h1");
           h1.innerText=el.name;
           h1.style.marginLeft="3%";
           h1.style.width="100%"
           let p = document.createElement("h3");
           p.innerText=`Rs:- ${el.price}`;
           p.style.marginLeft="1%";
           p.style.marginTop="7px";
           let img = document.createElement("img");
           img.style.height="20px"
           img.style.marginLeft="80%"
           img.style.marginTop="9%"
           img.addEventListener("click",()=>{
               remove(index);
           })
           img.src="https://tse1.mm.bing.net/th?id=OIP.zO9872glOfr8mjsUiekwUAHaIL&pid=Api&P=0";
           div2.append(img);
           div1.append(h1,p);
          div.append(div1,div2);
           products.append(div);
       });
    }
    displayData(arr);
    let apply1 = document.querySelector("#apply");
    let apply = ()=>{
       
        return ` <div>
        <h2>Apply Coupon</h2>
    </div>
    <div>
        <input type="text" placeholder="Coupon Code" id="in1">
        <button style="cursor:pointer" onclick="apply11()">Apply</button>
    </div>`
    }
    apply1.innerHTML=apply();
    let get = (Total_Price)=>{
        let app = document.querySelector("#append");
        let div = document.createElement("div");
        div.setAttribute("id","order1");
        let h2 = document.createElement("h2");
        h2.innerText="Order Summary";
        let h3 = document.createElement("h3");
        h3.setAttribute("id","fgffg")
        h3.innerText=`Total Payable:-  ${Total_Price}`
        let div1 = document.createElement("div");
        div1.setAttribute("id","btn1");
        let btn2 = document.createElement("button");
        btn2.innerText="Proceed to Buy";
       btn2.addEventListener("click",()=>{
        window.location.href="../payment/payment.html";
       })
        div.append(h2,h3);
        div1.append(btn2);
        app.append(div,div1);
    }
    get(Total_Price);
 let remove = (i)=>{
    console.log("hello");
    arr.splice(i,1);
    localStorage.setItem("cartData",JSON.stringify(arr));
    window.location.reload();
  }
  // let filtered = arr.filter((e,index)=>{
  //     return index!==i;
  // })

}

let apply11 = ()=>{

    let in1 = document.querySelector("#in1").value;
   rr = Total_Price*in1/100;
   Total_Price-=rr;
   let gg = document.querySelector("#fgffg");
   gg.innerText=`Total Payable:- ${Total_Price}`;
   document.querySelector("#in1").value="";
 }
 
 document.querySelector("#explore").addEventListener("click",()=>{
    gopage();
 })
 let gopage = ()=>{
   window.location.href="";
 }