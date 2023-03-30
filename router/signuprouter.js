const express = require('express');
const router = express.Router();
router.use(express.json());

const { postsignup, LoginUser} = require('../controller/signupcontroller')

router.post('/',postsignup)
router.post('/',LoginUser)

module.exports = router