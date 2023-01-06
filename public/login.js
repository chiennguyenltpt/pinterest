// bat su kien hien registerLayout


signUp.addEventListener("click",()=>{
    document.querySelector(".registerLayout").style. visibility= "visible"
    document.querySelector("body").style.overflow = "hidden"

    document.addEventListener("mouseup",(e)=>{
    if(!document.getElementById("registerLayout").contains(e.target)){
        document.querySelector(".registerLayout").style. visibility= "hidden"
        document.querySelector("body").style.overflow = "visible"
    }
    })
})

logIn.addEventListener("click",()=>{
    document.querySelector(".logIn").style. visibility= "visible"
    document.querySelector("body").style.overflow = "hidden"
})

// bat click logo
let logo = document.querySelector(".logo")
logo.addEventListener("click",()=>{
    window.location.href = "http://localhost:3000"
})


// su kien onfocus tren email sign signUp
email.addEventListener("focus",()=>{
    document.querySelectorAll("form small")[0].style.visibility = "hidden";
    
});
passWord.addEventListener("focus",()=>{
    document.querySelectorAll("form small")[1].style.visibility = "hidden"
})
age.addEventListener("focus",()=>{
    document.querySelectorAll("form small")[2].style.visibility = "hidden"
})


// bat su kien resgister

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail.value)==false)){
        document.querySelectorAll("form small")[0].style.visibility = "visible"
        document.querySelectorAll("form small")[0].textContent = "Email wrong format!!"
    }else if(form.mail.value==""){
        document.querySelectorAll("form small")[0].style.visibility = "visible"
        document.querySelectorAll("form small")[0].textContent = "Email cant be blank!!"
    }
    // password
    if(form.password.value==""){
        document.querySelectorAll("form small")[1].style.visibility = "visible"
        document.querySelectorAll("form small")[1].textContent = "password cant be blank!!"
    }else if(form.password.value.length<=6){
        document.querySelectorAll("form small")[1].style.visibility = "visible"
        document.querySelectorAll("form small")[1].textContent = "age can not be blank!!"
    }

    // age
    if(form.age.value=="" ){
        document.querySelectorAll("form small")[2].style.visibility = "visible"
        document.querySelectorAll("form small")[2].textContent = "password must have more than 7 character!!"
    }


    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail.value)==true)
     && form.password.value.length>6 && form.age.value !=""){
        let data = {
            email: form.mail.value,
            password:form.password.value,
            age:form.age.value,
        }
        fetch('http://localhost:3000',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{ "Content-type": "application/json; charset=UTF-8"}
            
        }).then( async(res)=>{
           let message = await res.json()
            if(message.message == "mail exist"){
                alert(message.message)
            }else{
                document.querySelector(".registerLayout").style. visibility= "hidden"
                document.querySelector("body").style.overflow = "visible"
                window.location.href = " http://localhost:3000"
            }
        })
    }


})



// sukien login 


