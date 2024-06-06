// const h2 = document.querySelector("#h2");
// const form = document.querySelector("form");
// const fileEmail = document.querySelector("#email");
// const filePassword = document.querySelector("#password");

// form.addEventListener('submit' , (event)=>{
//      event.preventDefault()
//     const mail=localStorage.getItem("email")
//     const pass=localStorage.getItem("password")

//     if(fileEmail.value === mail && filePassword === pass){
//         window.location = "quiz.html";
//     }else{
//         h2.innerHTML= "YOUR EMAIL AND PASSWORD NOT CORRECT!"
//     }
// })


var heading02 = document.querySelector("#h2");
const form = document.querySelector("form");
        var fileEmail = document.querySelector("#email");
        var filePass = document.querySelector("#password");
        form.addEventListener("submit" , (event)=>{
event.preventDefault()
            var email = localStorage.getItem("email");
            var password = localStorage.getItem("password");
            if (fileEmail.value === email && filePass.value === password) {
                window.location = "quiz.html"
            }   
            
            else{
                heading02.style.padding = "1rem";
                heading02.innerHTML ="YOUR EMAIL PASSWORD IS NOT CORRECT" ;
                }
    })
            
        