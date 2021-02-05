/*  routes/register.js  */

const express = require('express');
const router = express.Router();

router.post('/register',(req,res)=>{
    res.render('register');
});

module.exports = router;
