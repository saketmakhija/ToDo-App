const mongoose = require('mongoose');
//creating schema for collection
const itemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    date:{
        type:String
    }
});


const Item =mongoose.model('Item', itemSchema);
module.exports = Item;