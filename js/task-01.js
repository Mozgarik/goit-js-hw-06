const numberCat = categories.querySelectorAll('ul')
const ulLen = numberCat.length
console.log('number of categories:', ulLen)

const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};


