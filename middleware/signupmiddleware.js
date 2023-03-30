const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const signup = require('../module/signupmodule')

const protect = asyncHandler(async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded);
            // Get user from the token
            req.users = await users.findById(decoded.id).select('-password')
            next()
        }
        catch (error) {
            console.log(error);
            res.status(401)
            res.json('Not authorized')
        }
    }
    if(!token) {
        res.status(401)
        res.json('not authorized token')
    }
})

module.exports = protect