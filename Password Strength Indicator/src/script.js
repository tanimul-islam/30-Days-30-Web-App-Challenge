var message = document.getElementById("message");
var pass = document.getElementById("password");
var str = document.getElementById("strength");

pass.addEventListener("input",() =>{
    if (pass.value.length > 0){
        message.style.display ="block";
    }
    else{
        message.style.display ="none";
    }

    if(pass.value.length <4){
        str.innerHTML=" Weak"
        pass.style.borderColor = "#ff5925"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8 ){
        str.innerHTML=" Medium";
        pass.style.borderColor = "yellow"
    }
    else if(pass.value.length >= 8){
        str.innerHTML=" Strong";
        pass.style.borderColor = "green"
    }
})