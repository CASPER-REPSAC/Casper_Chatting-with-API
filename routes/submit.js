/*  routes/submit.js (for register)  */

const express = require('express');
const router = express.Router();
//for session


router.post('/submit', (req,res)=>{
    const userid = req.body.userid;
    const password = req.body.password;
    const nickname = req.body.nickname;

    if(!(username, password, id)){
        let notice = "<script>alert('모든 항목을 입력하세요.'); location.href='/register'; </script>";
    }
    else { 
        let notice = "<script>alert('회원가입이 완료되었습니다.'); location.href='/register';</script>";
        res.send(notice);
        res.redirect('/');
    }
});

module.exports = router;
