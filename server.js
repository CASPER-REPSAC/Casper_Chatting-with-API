/*  server.js  */

const express = require('express');
const server = express();
const session = require('express-session');
const router = express.Router();

/*=====Route Modules=====*/
const mysql = require('./routes/mysql');
const routeJoin = require('./routes/join');
const routeIndex = require('./routes/index');
const routeSubmit = require('./routes/submit');


mysql.connect();

server.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.use(express.json()); //json 
server.set("view engine", "ejs");
server.use(express.static(__dirname + "/static"));
server.use(session({
    secret: '_C@@5P3RRRC7AT@@@$!zs$dKs24@@aw@$!Op5',
    resave: false,
    saveUninitialized: true
}));

server.get('/',routeIndex);// "views/index.ejs" is main page
server.get('/join',routeJoin);  // "views/join.ejs" is join page"
server.post('/submit',routeSubmit);
server.listen("7000",() =>{
    console.log("Server start...");
});
