const passwordBox = document.getElementById("password");
const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallCase ="abcdefghijklmnopqrstuvwxyz";
const digits ="0123456789";
const specialChar="!@#$%^&*()-=_+[]{}|;:'\",.<>/?`~";

const allChars = upperCase +smallCase + digits + specialChar;

function createPassword(){
    let password ="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += smallCase[Math.floor(Math.random()*smallCase.length)];
    password += digits[Math.floor(Math.random()*digits.length)];
    password += specialChar[Math.floor(Math.random()*specialChar.length)];

    while(len > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
