const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ingList = document.createElement('ul')
// ingList.classList.add('ingredients')
// console.log(ingList)

// const itemOne = document.createElement('li')
// itemOne.classList.add('ingredients-item')
// itemOne.textContent = ('Potatoes')
// console.log(itemOne)

// const itemTwo = document.createElement('li')
// itemTwo.classList.add('ingredients-item')
// itemTwo.textContent = ('Mushrooms')
// console.log(itemTwo)

// const itemThree = document.createElement('li')
// itemThree.classList.add('ingredients-item')
// itemThree.textContent = ('Garlic')
// console.log(itemThree)

// const itemFour = document.createElement('li')
// itemFour.classList.add('ingredients-item')
// itemFour.textContent = ('Tomatos')
// console.log(itemFour)

// const itemFive = document.createElement('li')
// itemFive.classList.add('ingredients-item')
// itemFive.textContent = ('Herbs')
// console.log(itemFive)

// const itemSixth = document.createElement('li')
// itemSixth.classList.add('ingredients-item')
// itemSixth.textContent = ('Condiments')
// console.log(itemSixth)

// document.body.appendChild(ingList)
// ingList.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSixth)

const ingredientsList = document.querySelector('#ingredients')
const ingredientsEl = ingredients.map(el => {
  const ing = document.createElement('li')
  ing.textContent = (el) 
  return ing
});

ingredientsList.append(...ingredientsEl)
