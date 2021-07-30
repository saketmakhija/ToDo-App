const momgoose = require('mongoose');
momgoose.connect('mongodb://localhost/todo_app');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "cannot connect to db"));
db.once('open', function(){
    console.log("connected to DB");
});