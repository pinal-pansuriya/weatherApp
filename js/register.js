function doRegister() {
    const nameInput = document.getElementById('name').value
    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('password').value
  
    let usersData = localStorage.getItem('usersData')
    usersData = JSON.parse(usersData) || []
    const isEmailExist = usersData.find(user => user.email === emailInput)
    if(nameInput === "" && emailInput === "" && passwordInput === ""){
      return alert("enter your details")
    }
    else if (isEmailExist) {
      return alert('Email already exist!')
    }
    const newUser = {
      name: nameInput,
      email: emailInput,
      password: passwordInput
    }
    usersData.push(newUser)
    localStorage.setItem('usersData', JSON.stringify(usersData))
    alert('Register success!')
    localStorage.setItem('loggedInUser', JSON.stringify(newUser))
    return window.location.replace('dashboard.html')
  }