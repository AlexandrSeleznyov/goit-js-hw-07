const input = document.querySelector("#validation-input");
const length = (input.getAttribute('data-length'));

input.addEventListener("blur",onFocusOut);

function onFocusOut(event){
    if (event.currentTarget.value.length===Number(length)){
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    } else 
    event.currentTarget.classList.add("invalid");
   
}