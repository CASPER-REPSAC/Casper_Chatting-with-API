/*  routes/register.js  */

const express = require('express');
const router = express.Router();

router.post('/join',(req,res)=>{
    res.render('join');
});

module.exports = router;
