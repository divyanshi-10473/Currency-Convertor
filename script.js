// let BASE_URL="https://v6.exchangerate-api.com/v6/b48423c445734460996a5b6d/pair";
let option=document.querySelectorAll(".box select")
for(let selector of option){
for (code in CountryList) {
    let cd=document.createElement("option");
    
    cd.innerText=code;
    cd.value=code;
    selector.append(cd);
    selector.addEventListener('change',(evt)=>{
        updateFlag(evt.target);
    })
}
}


function updateFlag(ele){
         let img=ele.parentElement.querySelector("img");
         let codes=ele.value;
         img.src=`https://flagsapi.com/${countryCode[codes]}/shiny/64.png`;
}



const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    let from=document.querySelector(".from select");
    let fromVal=from.value;
    let to=document.querySelector(".to select");
    let toVal=to.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
    }
    let f=CountryList[fromVal];
    let t=CountryList[toVal];
    let finalamount=(t/f)*amtVal;
    finalamount=finalamount.toFixed(2);
    let msg=document.querySelector(".msg");
    msg.innerText = `${amtVal} ${fromVal} = ${finalamount} ${toVal}`;

    // const URL = `${BASE_URL}/${fromVal}/${toVal}`;
    // fetch(URL).then(response=>response.json())
    // .then(result=>{
    //     let exchange=result.conversion_rates[toCurrency.Value];
    // })
    
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data.conversion_rate;
//   console.log(rate);
//     let finalAmount = rate*amtVal;
//     let msg=document.querySelector(".msg");
//     msg.innerText = `${amtVal} ${fromVal} = ${finalAmount} ${toVal}`;
  };






let convert=document.querySelector("button");
convert.addEventListener('click',(e)=>{
    e.preventDefault();
    updateExchangeRate();
    
})

window.addEventListener("load", () => {
    updateExchangeRate();
  });

