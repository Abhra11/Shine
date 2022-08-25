let landingPage= ()=>{
    
      let  name= document.querySelector("#name").value;
       let number= document.querySelector("#mobile").value;
       let email= document.querySelector("#email").value;
       let location= document.querySelector("#location").value;
      let experience= document.querySelector("#fresher").value;
       let qualification= document.querySelector("#highest").value;
       let skills= document.querySelector("#skills").value;
        let p = new receive(name,number,email,location,experience,qualification,skills);
        p.signup(email,p);
        document.querySelector("#name").value="";
        document.querySelector("#mobile").value="";
        document.querySelector("#email").value="";
       document.querySelector("#location").value="";
      document.querySelector("#fresher").value="";
        document.querySelector("#highest").value="";
        document.querySelector("#skills").value="";
 
}
let arr = JSON.parse(localStorage.getItem("userData"))||[];
class receive{
    constructor(na,nu,e,l,ex,q,s){
        this.name=na;
        this.number=nu;
        this.email=e;
        this.location=l;
        this.experience=ex;
        this.qualification=q;
        this.skills=s;

    }
    signup(e,p){
      let isAvailable = checkAvailable(e);
if(isAvailable){
    arr.push(p);
    localStorage.setItem("userData",JSON.stringify(arr));
} else {
   alert("This email is alreay store in Database");
};

       function checkAvailable(e){
         let filtered=  arr.filter((el)=>{
             return el.email===e;
           })
           if(filtered.length>0){
            return false;
           } else {
            return true;
           }
        }
    }
}