const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event){
    if (event.currentTarget.value===''){
        span.textContent = 'незнакомец';
    } else
    span.textContent = event.currentTarget.value;
}