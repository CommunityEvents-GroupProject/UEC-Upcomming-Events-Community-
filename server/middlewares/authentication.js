const { verify } = require('../helpers/jwt');
const { User } = require('../models');


function authentication(req, res, next) {
    try {
        let decoded = verify(req.headers.token);
        User.findByPk(decoded.id)
            .then(result => {
                if(result) {
                    req.currentUserId = result.id;
                    return next();
                } else {
                    return next({
                        name: 'NotFound',
                        errors: { message: 'User not Found'}
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'Unauthorized',
                    errors: { message: 'User not Authenticated'}
                })
            })
    }
    catch(err) {
        return next(err)
    }
}


module.exports = authentication;