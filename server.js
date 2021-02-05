/*  server.js  */

const express = require('express');
const server = express();
const session = require('express-session');
const router = express.Router();
//const passport = require('passport');

/*  DB require  */
const {chat} = require('./models/chatSch');
const db = require('./db');

server.use(express.json()); //json 
server.set("view engine", "ejs");
server.use(express.static(__dirname + "/static"));

server.use(session({
    secret: '_C@@5P3RRRC7AT@@@$!zs$dKs24@@aw@$!Op5',
    resave: false,
    saveUninitialized: true
}));

server.get('/',(req,res)=>{ // "views/index.ejs" is main page
    res.render('index');
});

server.get('/register',(req,res)=>{  // "views/register.ejs" is register page"
    res.render('register');
});

server.listen("8000",() =>{
    console.log("Server start...");
});
