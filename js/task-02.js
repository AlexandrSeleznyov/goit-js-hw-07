const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const ingredientsEl = document.getElementById('ingredients');
console.log(ingredients);
const elements = ingredients.map((ingredient)=>{
const liEl = document.createElement('li');
liEl.textContent = ingredient;
return liEl;
}
);
ingredientsEl.append(...elements);
console.log(ingredientsEl);