

let alert= document.getElementById("alert");
alert.onclick= ()=>{
    alertFun()
}
let content_div=document.getElementById("content_div");
function alertFun(){
     content_div=document.getElementById("content_div");
   content_div.innerHTML=null;
   let image=document.createElement("img");
   image.src= "./images/alert_msg.jpg";
   content_div.append(image)

}
function recom(){
  content_div=document.getElementById("content_div");
  content_div.innerHTML=null;
  let image=document.createElement("img");
  image.src= "./images/recom.jpg";
  content_div.append(image)
}
function saveFun(){
    content_div=document.getElementById("content_div");
    content_div.innerHTML=null;
    let image=document.createElement("img");
    image.src= "./images/save_cont.jpg";
    content_div.append(image)
}
function appliedFun(){
    content_div=document.getElementById("content_div");
    content_div.innerHTML=null;
    let image=document.createElement("img");
    image.src= "./images/msg_content.jpg";
    content_div.append(image)
}
// let data=[
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1507612395_7198.png&w=1920&q=75",
    //   "name": "Advertising Manager",
    //   "rating": 4.5,
    //   "category": "Sales & Marketing",
    //   "provider": "Vskills",
    //   "skill": "Manager",
    //   "duration": "14 hrs",
    //   "price": 3499,
    //   "id": 1
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1508901993_9386.png&w=1920&q=75",
    //   "name": "Financial Services Marketing",
    //   "rating": 5,
    //   "category": "Sales & Marketing",
    //   "provider": "Vskills",
    //   "skill": "Marketing",
    //   "duration": "13 hrs",
    //   "price": 3499,
    //   "id": 2
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1521628661_1849.png&w=1920&q=75",
    //   "name": "Services Marketing Manager",
    //   "rating": 4.5,
    //   "category": "Sales & Marketing",
    //   "provider": "Vskills",
    //   "skill": "Marketing Manager",
    //   "duration": "20 hrs",
    //   "price": 3499,
    //   "id": 3
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1508900890_4134.png&w=1920&q=75",
    //   "name": "Marketing Essentials",
    //   "rating": 4.5,
    //   "category": "Sales & Marketing",
    //   "provider": "skillsoft",
    //   "skill": "Marketing",
    //   "duration": "186 days",
    //   "price": 9620,
    //   "id": 4
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1509106341_3192.png&w=1920&q=75",
    //   "name": "Telesales Executive Test",
    //   "rating": 3.5,
    //   "category": "Sales & Marketing",
    //   "provider": "TestPrepTraining",
    //   "skill": "Executive",
    //   "duration": "365 days",
    //   "price": 6969,
    //   "id": 5
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1521197278_3921.png&w=1920&q=75",
    //   "name": "Multichannel Retail Test",
    //   "rating": 3.5,
    //   "category": "Sales & Marketing",
    //   "provider": "TestPrepTraining",
    //   "skill": "Sales",
    //   "duration": "365 days",
    //   "price": 6969,
    //   "id": 6
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1532691289_722.png&w=1920&q=75",
    //   "name": "SEO Test",
    //   "rating": 3.5,
    //   "category": "Sales & Marketing",
    //   "provider": "TestPrepTraining",
    //   "skill": "Sales",
    //   "duration": "365 days",
    //   "price": 999,
    //   "id": 7
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1555566599_329.png&w=1080&q=75",
    //   "name": "Linkedin Marketing",
    //   "rating": 3.5,
    //   "category": "Sales & Marketing",
    //   "provider": "ERB",
    //   "skill": "Marketing",
    //   "duration": "365 days",
    //   "price": 5999,
    //   "id": 8
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1555566875_8617.png&w=1080&q=75",
    //   "name": "Sell like an expert",
    //   "rating": 2.5,
    //   "category": "Sales & Marketing",
    //   "provider": "ERB",
    //   "skill": "Sales",
    //   "duration": "365 days",
    //   "price": 9999,
    //   "id": 9
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1559024781_1069.png&w=1080&q=75",
    //   "name": "Certified Digital Marketing Master",
    //   "rating": 4.5,
    //   "category": "Sales & Marketing",
    //   "provider": "ISEL Global",
    //   "skill": "Marketing",
    //   "duration": "3 Month",
    //   "price": 25000,
    //   "id": 10
    // },
    // {
    //   "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1571122840_1793.png&w=1080&q=75",
    //   "name": "Issue Negotiation Skills",
    //   "rating": 4.5,
    //   "category": "Sales & Marketing",
    //   "provider": "Shine Learning",
    //   "skill": "Sales",
    //   "duration": "3 Month",
    //   "price": 9999,
    //   "id": 11
    // },
  //   {
  //     "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1509282366_6812.png&w=1080&q=75",
  //     "name": "Distribution Manager",
  //     "rating": 5,
  //     "category": "Sales & Marketing",
  //     "provider": "Vskills",
  //     "skill": "Manager",
  //     "duration": "12 hr",
  //     "price": 3499,
  //     "id": 12
  //   },
  //   {
  //     "image": "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1542800087_8980.png&w=1080&q=75",
  //     "name": "Digital Marketing Certification",
  //     "rating": 4.5,
  //     "category": "Sales & Marketing",
  //     "provider": "Edureka",
  //     "skill": "Marketing",
  //     "duration": "30 hrs",
  //     "price": 19995,
  //     "id": 13
  //   }
    
  // ];
  // let append=(data)=>{
  //   let courses= document.getElementById("courses");
  //   courses.innerHTML=null;
  //   let leftarrow= document.createElement("div")
  //   leftarrow.setAttribute("id","leftArrow")
  //   leftarrow.innerHTML=` <div id="leftarrow"><button>&lt;</button></div>`
   
  //   courses.append(leftarrow)
  //   data.forEach((ele)=>{
  //       let name= document.createElement('h4');
  //       name.textContent=ele.name;
  //       name.setAttribute('class','name')

  //       let image= document.createElement('img');
  //       image.src=ele.image;

  //       let rating= document.createElement('h4');
  //       rating.textContent=`${ele.rating} ⭐`;

  //       let provider=document.createElement('small');
  //       provider.textContent=ele.provider;
  //       provider.setAttribute('class','provider');
        

  //       let dura=document.createElement('p');
  //       dura.innerText=`Duration: ${ele.duration} | Mode: Online`;

  //       let price= document.createElement('h4');
  //       price.textContent=`₹${ele.price}`;



  //       let cards=document.createElement('div');
  //       cards.setAttribute('class','cards')
        
  //       let div= document.createElement('div');
  //       div.setAttribute('class','div')
  //       let div1= document.createElement('div');
  //       div1.setAttribute('class','div1')

  //       let div2= document.createElement('div');
  //   div2.setAttribute("class","div2")
  //       div1.append(image,name)
  //       div2.append( provider,rating);
      
  //       div.append(div1,div2,dura,price)
  //       cards.append(div)
  //       courses.append(cards);
  //   });
  //   let rightarrow= document.createElement("div")
  //   rightarrow.setAttribute("id","rightArrow")
  //   rightarrow.innerHTML=` <div id="leftarrow"><button>&gt;</button></div>`
  //   courses.append(rightarrow)
  // }
  // append(data);



let arr = JSON.parse(localStorage.getItem("userData"))||[];
console.log(arr)
arr.forEach((el)=>{
 
    let user=document.getElementById("userName");
    user.innerText=el.name;

})
// user.innerText= arr.name;
// console.log(arr.name)

