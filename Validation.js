function validations() {
    //UC1
    var name = document.forms["form"]["first-name"].value
    const regex = RegExp("^[A-Z]{1}[a-z]*$")
    if (name == "" || !regex.test(name)) {
        window.alert("Please enter your name properly.");
    }
}
