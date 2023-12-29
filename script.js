let exchangeRate = document.querySelector(".exchangerate");
let getBtn = document.querySelector("button");
let amount = document.querySelector('#input')
let img = document.querySelector('.selectbox')


getBtn.addEventListener('click', () => {
    let val = amount.value
    let inr = 83.13;
    let total = val * inr
    exchangeRate.innerHTML = `${val} USD = ${Math.round(total)} INR`
    amount.value="";
})
