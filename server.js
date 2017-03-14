var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

//dummy data
var contacts = [
	{
		    id: 1,
		    name: "Leanne Graham",
		    email: "Sincere@april.biz"
		  },
		  {
		    id: 2,
		    name: "Ervin Howell",
		    email: "Shanna@melissa.tv"
		  },
		  {
		    id: 3,
		    name: "Clementine Bauch",
		    email: "Nathan@yesenia.net"
		  },
		  {
		    id: 4,
		    name: "Patricia Lebsack",
		    email: "Julianne.OConner@kory.org"
		  },
		  {
		    id: 5,
		    name: "Chelsey Dietrich",
		    email: "Lucio_Hettinger@annie.ca"
		  },
		  {
		    id: 6,
		    name: "Mrs. Dennis Schulist",
		    email: "Karley_Dach@jasper.info"
		  },
		  {
		    id: 7,
		    name: "Kurtis Weissnat",
		    email: "Telly.Hoeger@billy.biz"
		  },
		  {
		    id: 8,
		    name: "Nicholas Runolfsdottir V",
		    email: "Sherwood@rosamond.me"
		  },
		  {
		    id: 9,
		    name: "Glenna Reichert",
		    email: "Chaim_McDermott@dana.io"
		  },
		  {
		    id: 10,
		    name: "Clementina DuBuque",
		    email: "Rey.Padberg@karina.biz"
		  }
];

//entry point to get contacts
app.get('/contacts', function(req, res, next){

	res.json(contacts);

});

//entry point to add New Contact
app.post('/addContact', function(req, res, next){
	var newContact = req.body;
	//add id to new contact
	newContact.id = contacts.length + 1;
	contacts.push(newContact);

	res.end();
});


var port = process.env.PORT || '4000';

//start the server
app.listen(port, function() {
	console.log('server is up on port: ' +  port);
});