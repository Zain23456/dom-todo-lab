let inputElem = document.querySelector('#input')
let btn = document.querySelector('#submit-button')
let ulElem = document.querySelector('#todo-list')
let resetBtn = document.getElementById('rest-button')


btn.addEventListener('click', (e) => {
  let liElem = document.createElement('li')
  liElem.textContent = inputElem.value
  
  if (inputElem.value === '') {
    alert("There is no TO-Do written")
  } else {
    ulElem.appendChild(liElem)
  }
  inputElem.value = ''
})

resetBtn.addEventListener('click', (e) => {
  
})

//// If input field is empty don't appendChild
//* Add reset button that removes all list items from ul
//* When item is clicked remove it from the list use existing CER
//* Center all elements on the page by linking css file
//* add a form and submit feature to web app