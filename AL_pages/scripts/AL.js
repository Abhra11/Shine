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