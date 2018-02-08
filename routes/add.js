var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var nameToShow = req.query.name;
	var descriptionToShow = req.query.description;
	var newFriend = 
		{
		'name': nameToShow,
		'description': descriptionToShow,
		'imageURL': 'http://lorempixel.com/400/400/people/'
		}

	data.friends.push(newFriend);
	res.render('index', data);
 }