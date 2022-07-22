const form = document.getElementById("form")
const fname = document.getElementById("first-name")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phone_number")
const validations= () => {
    const name = fname.value.trim()
    const emailId = email.value.trim()
    const phone = phoneNumber.value.trim()
    const regex = RegExp("^[A-Z]{1}[a-z]*$")
    if (name == "" || !regex.test(name)) {
        window.alert("Please enter valid name")    
    }

    const emailRegex = RegExp("^[A-Za-z0-9]*+@[A-Za-z0-9]*+.[A-Za-z]")
    if (email == "" || emailRegex.test(email) == false) {
        window.alert("Please enter valid email")  
    }
    const phoneRegex = RegExp("^[91]{1}[7-9]{1}[0-9]{9}$")
    if (phoneNumber == "" || !phoneRegex.test(phoneNumber) == false) {
        window.alert("Please enter valid phone number")  
    }
}
