function SetUsername(username){
    this.username=username;
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("ram", "ram@fb.com", "123")
console.log(chai);