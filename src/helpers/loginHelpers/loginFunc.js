const axios = require('axios')

async function loginFunc(user) {
  try {
    const { data } = await axios.post('/api/users/login', user)
    return data


  } catch (err) {
    alert('Something Went Wrong. Please Try Again')
  }
}

export default loginFunc()
