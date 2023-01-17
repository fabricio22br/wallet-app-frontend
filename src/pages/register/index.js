const onRegister = () => {
  const email = document.getElementById('input-email').value
  const name = document.getElementById('input-name').value

  if (name.length < 3) {
    alert('Nome deve conter mais de 3 caracters.')
    return
  }
}

window.onload = () => {
  const form = document.getElementById('form-register')
  form.onsubmit = event => {
    event.preventDefault()
  }
}
