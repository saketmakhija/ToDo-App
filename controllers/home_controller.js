const Item = require('../models/item');
module.exports.home = function(req, res){
    Item.find({}, function(err, items){
        if(err){
            console.log("error fetching from db");
        }
        return res.render('home', {
            title:"Home",
            todoItems: items
        });
    });
}

module.exports.create = function(req, res){
    //console.log("request bodyAAAAAAAA", req.body);
    Item.create({
        
        item:req.body.item,
        category: req.body.category,
        date : req.body.date
    }, function(err, newItem){
        console.log("new item is ", newItem);
        return res.redirect('back');
    });
    
}

module.exports.delete = function(req, res){
    let id = req.query.id;
    Item.findByIdAndDelete(id, function(err){
        if(err){
            console.log("error in deleting");
        }
    });
    res.redirect('back');
}