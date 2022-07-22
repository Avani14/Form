const form = document.getElementById("form")
const fname = document.getElementById("first-name")
const email = document.getElementById("email")
const validations= () => {
    const name = fname.value.trim()
    const emailId = email.value.trim()
    const regex = RegExp("^[A-Z]{1}[a-z]*$")
    if (name == "" || !regex.test(name)) {
        window.alert("Please enter valid name")    
    }

    const emailRegex = RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    if (email == "" || !emailRegex.test(email)) {
        window.alert("Please enter valid email")  
    }
   
}
