const user = {
    username: "sanjeev",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // // console.log(`Username: ${this.username}`);
        console.log(this);
    }



}

// console.log(user.username);
// console.log(user.getUserDetails);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
