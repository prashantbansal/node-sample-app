const http = require('http'); //adding global module


//const routes = require('./routes');
//const http = require('./http'); //adding local file, if needed
//const https = require('https');
//const fs = require('fs');


// function requestListener(req, res){

// }

// http.createServer(function(req, res){

// });

//const server = http.createServer((req, res) => {

//});
//console.log(routes.someText);
//const server = http.createServer(routes.handler);
//server.listen(3001);

const path = require('path');
const express = require('express');
const bodyParser1 = require('body-parser');
const expressHbs = require('express-handlebars');
const app = express();

// app.engine('hbs',expressHbs({
//     layoutDir:'views/layouts', 
//     defaultLayout: 'main-layout', 
//     extname: 'hbs'}));
// app.set('view engine','hbs');
// app.set('views','views');

//app.set('view engine','pug');
//app.set('views','views');

app.set('view engine','ejs');
app.set('views','views');

const adminroutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const routes_404 = require('./routes/404');

app.use(bodyParser1.urlencoded({extended: false}));

// app.use('/add-product', (req, res, next) => {
//     console.log('in middleware');
//     res.send('<form action="/product" method="POST"><input type = "text" name="title"><button type="Submit">Add Product</button></form>');
//    });

// app.post('/product', (req, res, next) =>{
//     console.log(req.body);
//     res.redirect('/');
// });
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminroutes);
app.use(shopRoutes);
app.use(routes_404);



app.listen(3001);