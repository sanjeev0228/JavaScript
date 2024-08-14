class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }


addCourse(){
    console.log(`A new course was added by ${this.username}`);
    
}
}

const user1 = new Teacher("manoj", "manoj@teacher.com", "123")

user1.logMe()
const abc = new User("sanjeev")
 
