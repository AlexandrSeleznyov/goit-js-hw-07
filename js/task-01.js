const ListItems = document.querySelectorAll('.item');
function  getCategories () { 
console.log(`В списке ${ListItems.length} категории.`);}
getCategories ();

function listCategories() {
ListItems.forEach((item) => {
console.log(`категория: ${item.firstElementChild.textContent}`);
console.log(`количество элементов: ${item.lastElementChild.children.length}`);
});
};
listCategories();
