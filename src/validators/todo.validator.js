function createTodoValidator(req, res,next) {
    if(!req.body.todoText) {
        return res.json({msg:'Invalid Request'})
    }

    // if u r sending everything req
    next();
}

module.exports = {
    createTodoValidator
}


// IT IS A MIDDLEWARE  FUNCTION THAT CHECKS IF THE REQUEST BODY HAS todoText PROPERTY OR NOT.IF IT DOESN"T HAVE IT THEN IT SENDS AN