const { User } = require("../models");

function emailValidUnique(email) {
    User.findOne({
        where: {
            email
        }
    })
        .then(data => {
            if(!data) {
                return User.create()
            } else {
                
            }
        })
        .catch(err => {
            return next(err)
        })
}


module.exports = emailValidUnique;