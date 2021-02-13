/*  routes/submit.js (for register)  */

const express = require('express');
const router = express.Router();
const mysql = require('./mysql');

router.post('/submit',(req,res)=>{
    const userid = req.body.userid;
    const password = req.body.password;
    const name = req.body.name;
    const nickname = req.body.nickname;

    if(!(nickname, password, userid, name)){
        let notice = "<script>alert('모든 항목을 입력하세요.'); location.href='/join'; </script>";
    }
    else {
        let sql = 'SELECT userid FROM chat WHERE userid=?';
        let params = [userid];
        mysql.query(sql, params,(err,results,field)=>{
            if(err) console.log('ERROR: ' + err)
            else{
                if(results.userid===NULL){
                    sql = 'INSERT INTO chat(userid,name,password,nickname,CREATED) VALUES(?,?,?,?,NOW())';
                    params = [userid, name, password, nickname, CREATED];
                    mysql.query(sql, params,(err)=>{
                        if(results.affectedRows > 0){
                            console.log(`Register complete : ${userid}`);
                           }else{
                               console.log('ERROR: '+err);
                           }
                    });   
                }
                else{
                    res.send("<script>alert('중복된 아이디 입니다.');</script>");
                }
            }
        });
        let notice = "<script>alert('회원가입이 완료되었습니다.'); location.href='/join';</script>";
        res.send(notice);
        res.redirect('/');
    }
});

module.exports = router;
