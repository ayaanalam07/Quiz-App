const h2 =document.querySelector("#h2");
const form=document.querySelector("form");
const fullName=document.querySelector("#fullName"); 
const email=document.querySelector("#email");
const password=document.querySelector("#password");

form.addEventListener('submit' , (event)=>{
        event.preventDefault()
        const fullName2= localStorage.setItem('fullName' ,fullName.value);
        const mail= localStorage.setItem('email' ,email.value);
        const pass= localStorage.setItem('password' ,password.value);

        if(fullName.value === ""){
            h2.innerHTML="Please fill out the details correctly"
        }else if(email.value === "" || password.value === ""){
            h2.innerHTML="please fill out the details correctly"
        }else{
            window.location ="index.html";
        }
        
        
        if(fullName.value && email.value && password.value){
            alert("NOW YOU ARE REGISTERED IN THIS APP")
            
        }else{
            alert("ENTER A CORRECT VALUE")
        }
    })





