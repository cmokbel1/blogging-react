const axios = require('axios')

async function loginFunc(user) {
  document.getElementById('loginbutton').addEventListener('click', async function (event) {
    event.preventDefault()

    const { username, token } = await loginFunc({
      username: document.getElementById('inputEmail').value,
      password: document.getElementById('inputPassword').value,

    })
    console.log({ username, token })

    if (token) {
      localStorage.setItem('username', username)
      localStorage.setItem('token', token)
      window.location = '/'
    } else {
      alert('Invalid Username or Password. Please Try Again.')
    }
  })
  
  try {
    const { data } = await axios.post('/api/users/login', user)
    return data


  } catch (err) {
    alert('Something Went Wrong. Please Try Again')
  }
}

module.exports = {
  loginFunc
}

