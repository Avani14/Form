const form = document.getElementById("form")
const fname = document.getElementById("first-name")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phone_number")
const pass = document.getElementById("password")
const validations= () => {
    const name = fname.value.trim()
    const emailId = email.value.trim()
    const phone = phoneNumber.value.trim()
    const password = pass.value.trim()
    const regex = RegExp("^[A-Z]{1}[a-z]*$")
    if (name == "" || !regex.test(name)) {
        window.alert("Please enter valid name")    
    }

    const emailRegex = RegExp("^[A-Za-z0-9]*+@[A-Za-z0-9]*+.[A-Za-z]")
    if (email == "" || !emailRegex.test(email)) {
        window.alert("Please enter valid email")  
    }
    const phoneRegex = RegExp("^[0-9]{1,2}\\s{1}[7-9]{1}[0-9]{9}$")
    if (phoneNumber == "" || !phoneRegex.test(phoneNumber)) {
        window.alert("Please enter valid phone number")  
    }
    const passRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,}$)[a-zA-Z0-9]*[@#$%^&-+=()][a-zA-Z0-9]*$")
    if (password == "" || !passRegex.test(password)) {
        window.alert("Please enter valid password")    
    }
}

