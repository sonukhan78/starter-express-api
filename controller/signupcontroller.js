const signup = require('../module/signupmodule')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');


const postsignup = async(req,res)=>{
    const { firstname, lastname, email, password, gender } = req.body

    if(!firstname || !lastname || !email || !password || !gender){
        res.status(400)
        res.json("please add all fieds")
    }

    let cheackemail = email.includes("@gmail.com")
    if(!cheackemail){
        res.status(400)
        res.json ("please add the @gmail.com")
    }
    const data = await signup.create({
        firstname, 
        lastname,
        email, 
        password, 
        gender
    })
    res.status(201).json({
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.password,
        gender:data.gender,
        token:generateToken(data._id)

    })
}

const LoginUser =asyncHandler(async (req,res)=>{
    const { email, password } = req.body
    const user = await signup.findOne({ email })
    if(user && (bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        res.json("invalid credentials");
    }
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    postsignup,
    LoginUser
}