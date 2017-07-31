
let userDirectory = [
    {"username": "user1", "password": "password"},
    {"username": "user2", "password": "password"},
    {"username": "user3", "password": "password"}
]


exports.login = function(req, res, next) {
    if(req.session.authenticated) {
        console.log(req.body.username + " authenticated--")
        res.redirect("/")
    } else {
        res.render("login")
    }

}


exports.submitForm = function(req, res, next) {
    userDirectory.forEach((user) => {
        if(user["username"] === req.body.username && user["password"] === req.body.password) {
            req.session.authenticated = true
            req.session.username = req.body.username
        }
    })
    if(req.session.authenticated) {
        console.log(req.body.username + " authenticated--")
        res.redirect("/")
    } else {
        res.render("login")
    }
    
}