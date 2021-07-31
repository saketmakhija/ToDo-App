//This is entry point of every request made 
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(expressLayouts);
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`error is ${err}`);
    }
    console.log(`server is running on port ${port}`);
});