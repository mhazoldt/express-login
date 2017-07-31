exports.index = function(req, res, next) {
    if(req.session.authenticated){
        let username = req.session.username
        res.render("index", {username})
    } else {
        res.redirect("/login")
    }
    
}