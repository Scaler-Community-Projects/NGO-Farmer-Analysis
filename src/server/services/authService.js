
exports.signUp = (req, res, next) => {
    // take user details from UI and add it to database. (hash the password)
}

exports.login = (req, res, next) => {
    // Check if user exist and authenticate user based on id password entered.
    // return user details along with a token that will be helpful for authorization of that user.
}

exports.login = (req, res, next) => {
    // logging out user deactivating session id's and token.
}

exports.forgotPassword = (req, res, next) => {
    // Implement forget password functionality.
    // here we can verify user using OTP based authentication either sending OTP on mobile or on email.
}