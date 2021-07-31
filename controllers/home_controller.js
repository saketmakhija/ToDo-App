const Item = require('../models/item');

//Controller method for Home Page
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

//Controller method for adding a task to Planner
module.exports.create = function(req, res){
    Item.create({
        
        item:req.body.item,
        category: req.body.category,
        date : req.body.date
    }, function(err, newItem){
        console.log("new item is ", newItem);
        return res.redirect('back');
    });
    
}

//Controller method to deleing a task from planner
module.exports.delete = function(req, res){
    let id = req.query.id;
    Item.findByIdAndDelete(id, function(err){
        if(err){
            console.log("error in deleting");
        }
    });
    res.redirect('back');
}