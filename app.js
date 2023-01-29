

function saveData() {
    var name = document.getElementById("username")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var role = document.getElementById("role")

    var data = {
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value,
    }
    // console.log(data)
    if(role.length === 5){

        firebase.database().ref('details/admin').push(data)
    }
    else{
        firebase.database().ref('details/user').push(data)
    }
    

}

// console.log(firebase.database)
