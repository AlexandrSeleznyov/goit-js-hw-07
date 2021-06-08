const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
let widthBox = 30 ;
let heightBox = 30 ;


function getRandomColor(min, max){
  return Math.random()*(max-min)+min;
}
 
function createBoxes(amount){
  const mas = [];
for (let i=1; i<=amount; i +=1){
  const boxEl = document.createElement("div");
  boxEl.style.width = `${widthBox}px`;
  boxEl.style.height = `${heightBox}px`;
  
  boxEl.style.backgroundColor = 
  `rgb(${getRandomColor(0,255)}, 
  ${getRandomColor(0, 255)}, 
  ${getRandomColor(0, 255)})`;
 mas.push(boxEl);
 widthBox +=10;
 heightBox +=10;
}
boxesEl.append(...mas);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  widthBox = 30;
  heightBox = 30;
}
function clearInput() {
 controlsEl.firstElementChild.value = "";
}


controlsEl.addEventListener('click', onButtonClick);
function onButtonClick(event){
  if (event.target.dataset.action === 'render'){
    createBoxes(controlsEl.firstElementChild.value)
    } else if (event.target.dataset.action === 'destroy'){
      destroyBoxes();
      clearInput()};
  }
