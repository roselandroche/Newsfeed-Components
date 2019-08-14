/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function newItem(array) {
  const menuContent = document.createElement('div')
  menuContent.classList.add('menu')

  const unordered = document.createElement('ul')
  menuContent.append(unordered)

  array.forEach(item => {
    const listItem = document.createElement('li')
    listItem.textContent = `${item}`
    unordered.append(listItem)
  })

  return menuContent
}

const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener("click", (event) => {
  const menuItself = document.querySelector('.menu')
  menuItself.classList.toggle('menu--open')

  return menuItself
})

const body = document.querySelector('body')
body.appendChild(newItem(menuItems))

// const menuLinks = document.querySelectorAll('li')
// TweenMax.from(menuLinks, 1.5, {x = 300, delay:2});