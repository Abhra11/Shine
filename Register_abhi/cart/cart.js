let arr=[
    {
        name:"Java Backened Developer",
        price:3300,
    }
]


  let nav=()=>{
    return `<img src="https://learning.shine.com/_next/image?url=%2Fimages%2Fno-item-cart.png&w=128&q=75" alt="">
    <h3>No Items in Cart</h3>
    <p>Keep exploring to find a course for you</p>
    <button>Explore Now!</button>`
  }
  if(arr.length===0){
    let cont = document.querySelector("#cart11");
    cont.innerHTML=nav();
} else {
    arr.forEach((el)=>{
        let cont = document.querySelector("#cart11");
        cont.innerHTML="";
        let products = document.querySelector("#cartProducts");
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        div.style.width="60%"
        div.style.marginLeft="2%";
        let h1 = document.createElement("h1");
        h1.innerText=el.name;
        h1.style.marginLeft="2%";
        let p = document.createElement("h3");
        p.innerText=`Rs:- ${el.price}`;
        p.style.marginLeft="2%";
        p.style.marginTop="30px";
        let img = document.createElement("img");
        img.style.height="20px"
        img.src="https://tse1.mm.bing.net/th?id=OIP.zO9872glOfr8mjsUiekwUAHaIL&pid=Api&P=0";
        div.append(h1,p);
        div1.append(img);
        products.append(div,div1);
    })
}
console.log(document);