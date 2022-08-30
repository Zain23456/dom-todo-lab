let inputElem = document.querySelector('#input')
let btn = document.querySelector('#submit-button')
let ulElem = document.querySelector('#todo-list')

btn.addEventListener('click', (e) => {
  let liElem = document.createElement('li')
  liElem.textContent = inputElem.value
  inputElem.value = ''
  ulElem.appendChild(liElem)
})