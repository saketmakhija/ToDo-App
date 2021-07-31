const mongoose = require('mongoose');

//connecting to Database
mongoose.connect('mongodb://localhost/todo_app', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "cannot connect to db"));

db.once('open', function(){
    console.log("connected to DB");
});