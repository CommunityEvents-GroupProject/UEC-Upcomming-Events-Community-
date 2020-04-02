function errorHandler (err,req,res,next) {    
    /*
    Note:
     1. Make sure you add next on your static method in userController
     2. You can "next"" the error in this format:
        return next({
            name: "Internal Server Error",
            errors : [{ error }]
        })
    */
    if(err.name == "SequelizeValidationError"){
        const errors = err.errors.map(el => ({
            message : el.message
        }))
        return res.status(400).json({
            code:"400",
            type:"BadRequest",
            error: errors
        })
    } else if(err.name == "BadRequest"){
        return res.status(400).json({
            errors: err.errors
        })
    } else if(err.name == "InternalServerError"){
        return res.status(500).json({
            errors: err.errors
        })
    } else if(err.name == "User Not Found"){
        return res.status(404).json({
            errors: err.errors
        })
    }else if(err.name == "JsonWebTokenError"){
        return res.status(401).json({
            errors: err.errors,
            message: "Please sign in first"
        })
    } else {
        next(
            res.status(500).json({
                errors: err.errors
            })
        )
    }

}

module.exports = errorHandler