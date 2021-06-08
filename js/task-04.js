let counterValue=0;
const value = document.querySelector("#value");
const counter = document.querySelector("#counter");

function increment() {
    counterValue=counterValue + 1;
    value.textContent=counterValue;
    console.log(value.textContent);
};

function decrement() {
    counterValue-=1;
    value.textContent=counterValue;
    console.log(value.textContent);
};

counter.addEventListener("click", onTargetBtnclick);
function onTargetBtnclick(event) {
    
    if (event.target.dataset.action === "decrement") {
      decrement();
    } else if (event.target.dataset.action === "increment") {
      increment();
    }
};
