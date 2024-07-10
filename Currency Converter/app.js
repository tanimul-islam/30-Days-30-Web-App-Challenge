const BASE_FROM_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdowns){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "CAD"){
            newOption.selected ="selected";
        }
        else if (select.name === "to" && currCode === "BDT"){
            newOption.selected ="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    })
}


const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let image = element.parentElement.querySelector("img");
    image.src = newSrc;
}


btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;


    if (amtValue === "" || amtValue < 1){
        console.error("Value Not Accepted");
        amtValue = 1;
    }

    const URL = `${BASE_FROM_URL}/${fromCurr.value.toLowerCase()}.json`

    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalAmount = Math.round(amtValue *rate);
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});


