const scriptURL = 'https://script.google.com/macros/s/AKfycbymNyEuBD6rohKUnKi2-6ZbyaNNsva8AOX20LxU5qSL8Ct73R2edA9GczrDAQbxg7ND0w/exec'

const form = document.forms['Registration Form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})