const mongoose = require('mongoose');
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