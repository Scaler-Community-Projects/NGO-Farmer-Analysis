
exports.connectToDb = (req, res, next) => {
    // query db 
    // if error return error in callback
    // else return response

    // if this is the res from database.
    var res = {
        id: 1,
        name: "Tom Hanks"
    }
    return next(null, res)
}